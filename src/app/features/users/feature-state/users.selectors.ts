import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersAdapter, UsersState } from './users.reducer';

export const USERS_FEATURE_KEY = 'users';

const selectUserState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);
const { selectAll } = usersAdapter.getSelectors();

export const selectAllUsers = createSelector(selectUserState, selectAll);
