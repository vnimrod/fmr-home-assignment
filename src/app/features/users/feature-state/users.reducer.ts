import type { UserModels } from './';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
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

  // Load Users
  on(usersActions.load, (state) => ({ ...state, loading: true })),
  on(usersActions.loadSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loading: false })
  ),
  on(usersActions.loadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add User
  on(usersActions.addUser, (state) => ({
    ...state,
    error: null,
  })),

  on(usersActions.addUserSuccess, (state, { user }) =>
    usersAdapter.addOne(user, state)
  ),

  on(usersActions.addUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Update User
  on(usersActions.updateUser, (state, { user }) =>
    usersAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(usersActions.updateUserSuccess, (state, { user }) =>
    usersAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(usersActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Delete User
  on(usersActions.deleteUser, (state, { userId }) =>
    usersAdapter.removeOne(userId, state)
  ),
  on(usersActions.deleteUserSuccess, (state, { userId }) =>
    usersAdapter.removeOne(userId, state)
  ),
  on(usersActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Set Selected User
  on(usersActions.setSelectedUserId, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  }))
);
