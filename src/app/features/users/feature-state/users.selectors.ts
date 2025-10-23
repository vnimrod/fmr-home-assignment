import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersReducer } from './';

export const USERS_FEATURE_KEY = 'users';

const selectUserState = createFeatureSelector<UsersReducer.UsersState>(USERS_FEATURE_KEY);
const { selectAll } = UsersReducer.usersAdapter.getSelectors();

export const selectAllUsers = createSelector(selectUserState, selectAll);
