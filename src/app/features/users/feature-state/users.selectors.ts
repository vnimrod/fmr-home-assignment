import type { UserModels } from './';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersReducer } from './';
import * as _ from 'lodash';

export const USERS_FEATURE_KEY = 'users';

const selectUserState = createFeatureSelector<UserModels.UsersState>(USERS_FEATURE_KEY);
const { selectAll, selectEntities } = UsersReducer.usersAdapter.getSelectors();

export const selectAllUsers = createSelector(selectUserState, selectAll);
export const selectUserEntities = createSelector(selectUserState, selectEntities);

export const selectSelectedUserId = createSelector(selectUserState, (state) => state.selectedUserId);
export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedUserId) =>
    selectedUserId ? _.get(entities, selectedUserId, null) : null
);

export const selectLoading = createSelector(selectUserState, (state) => state.loading);

