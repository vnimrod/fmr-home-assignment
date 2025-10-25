import type * as UserOrdersModels from './user-orders.models';
import { createAction, props } from '@ngrx/store';

export const loadUserOrders = createAction(
  '[User Orders] Load User Orders',
  props<{ userId: string }>()
);

export const loadUserOrdersSuccess = createAction(
  '[User Orders] Load User Orders Success',
  props<{ userOrders: UserOrdersModels.UserOrder[] }>()
);

export const loadUserOrdersFailure = createAction(
  '[User Orders] Load User Orders Failure',
  props<{ error: string }>()
);