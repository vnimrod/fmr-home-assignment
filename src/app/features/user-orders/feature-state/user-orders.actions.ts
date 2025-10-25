import type { UserModels } from '../../users/feature-state';
import type { UserOrdersModels } from './';
import { createAction, props } from '@ngrx/store';

export const loadUserOrders = createAction(
  '[User Orders] Load User Orders',
  props<{ user: UserModels.User }>()
);

export const loadUserOrdersSuccess = createAction(
  '[User Orders] Load User Orders Success',
  props<{ userOrders: UserOrdersModels.UserOrder[]; user: UserModels.User }>()
);

export const loadUserOrdersFailure = createAction(
  '[User Orders] Load User Orders Failure',
  props<{ error: string }>()
);
