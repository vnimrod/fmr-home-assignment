import type * as UserOrdersModels from './user-orders.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ordersAdapter } from './user-orders.reducer';

export const USER_ORDERS_FEATURE_KEY = 'userOrders';

export const selectOrdersState = createFeatureSelector<UserOrdersModels.OrdersState>(USER_ORDERS_FEATURE_KEY);

const { selectAll, selectEntities } = ordersAdapter.getSelectors();

export const selectOrdersByUserId = createSelector(selectOrdersState, selectAll);
