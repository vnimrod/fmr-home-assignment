import { EntityState } from '@ngrx/entity';

export interface OrdersState extends EntityState<UserOrder> {
  loading: boolean;
  error: string | null;
}

export interface UserOrder {
  id: string;
  userId: string;
  totalPrice: number;
  createdAt: string;
  description: string;
}
