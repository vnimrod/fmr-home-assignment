import type * as UserModels from './users.models';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as usersActions from './users.actions';

export const usersAdapter = createEntityAdapter<UserModels.User>({
  selectId: (user) => user.id,
});

export const initialState: UserModels.UsersState = usersAdapter.getInitialState(
  {
    selectedUserId: null,
    loading: false,
    error: null,
  }
);

export const Reducer = createReducer(
  initialState,

  on(usersActions.load, (state) => ({ ...state, loading: true })),
  on(usersActions.loadSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loading: false })
  ),
  on(usersActions.loadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(usersActions.updateUser, (state, { user }) =>
    usersAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(usersActions.updateUserSuccess, (state, { user }) =>
    usersAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(usersActions.updateUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(usersActions.deleteUser, (state, { userId }) => 
    usersAdapter.removeOne(userId, state)
  ),
  on(usersActions.deleteUserSuccess, (state, { userId }) =>
    usersAdapter.removeOne(userId, state)
  ),
  on(usersActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
