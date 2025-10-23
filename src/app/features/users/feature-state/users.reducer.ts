import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as usersActions from './users.actions';
import type { User } from './users.models';

export interface UsersState extends EntityState<User> {
  selectedUserId: string | null;
  loading: boolean;
  error: string | null;
}

export const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

export const initialState: UsersState = usersAdapter.getInitialState({
  selectedUserId: null,
  loading: false,
  error: null,
});

export const usersReducer = createReducer(
  initialState,

  on(usersActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(usersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loading: false })
  ),
  on(usersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
