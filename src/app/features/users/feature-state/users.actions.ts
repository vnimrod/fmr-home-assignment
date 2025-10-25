import type * as UserModels from './users.models';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Users] Load Users');
export const loadSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: UserModels.User[] }>()
);

export const loadFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: string }>()
);

export const setSelectedUserId = createAction(
  '[Users] Set Selected User Id',
  props<{ userId: string }>()
);

export const addUser = createAction(
  '[Users] Add User',
  props<{ user: UserModels.User }>()
);

export const addUserSuccess = createAction(
  '[Users] Add User Success',
  props<{ user: UserModels.User }>()
);

export const addUserFailure = createAction(
  '[Users] Add User Failure',
  props<{ error: string }>()
);

export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: UserModels.User }>()
);

export const updateUserSuccess = createAction(
  '[Users] Update User Success',
  props<{ user: UserModels.User }>()
);

export const updateUserFailure = createAction(
  '[Users] Update User Failure',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ userId: string }>()
);

export const deleteUserSuccess = createAction(
  '[Users] Delete User Success',
  props<{ userId: string }>()
);

export const deleteUserFailure = createAction(
  '[Users] Delete User Failure',
  props<{ error: string }>()
);
