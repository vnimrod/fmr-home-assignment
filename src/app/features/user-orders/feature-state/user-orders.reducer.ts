import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { UserOrdersActions, UserOrdersModels } from './';

export const ordersAdapter = createEntityAdapter<UserOrdersModels.UserOrder>({
  selectId: (order) => order.id,
});

export const initialState: UserOrdersModels.OrdersState = ordersAdapter.getInitialState({
  loading: false,
  error: null,
});

export const Reducer = createReducer(
  initialState,
  on(UserOrdersActions.loadUserOrders, (state) => ({ ...state, loading: true, error: null })),
  on(UserOrdersActions.loadUserOrdersSuccess, (state, { userOrders }) =>
    ordersAdapter.setAll(userOrders, { ...state, loading: false })
  ),
  on(UserOrdersActions.loadUserOrdersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);