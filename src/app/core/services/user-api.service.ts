import type { UserOrdersModels } from '../../features/user-orders/feature-state';
import type { UserModels } from '../../features/users/feature-state';
import { Injectable } from '@angular/core';
import { delay, EMPTY, map, Observable, of } from 'rxjs';
import { USERS_MOCK } from '../mocks/users.mock';
import { ORDERS_MOCK } from '../mocks/orders.mock';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  getUsers(): Observable<UserModels.User[]> {
    return of(USERS_MOCK).pipe(delay(500));
  }

  getUserById(id: string): Observable<UserModels.User | undefined> {
    return of(USERS_MOCK.find((user) => user.id === id)).pipe(delay(300));
  }

  getOrdersByUserId(userId: string): Observable<UserOrdersModels.UserOrder[]> {
    return of(ORDERS_MOCK).pipe(
      delay(300),
      map((orders) => orders.filter((order) => order.userId === userId))
    );
  }

  addUser(user: UserModels.User): Observable<UserModels.User> {
    const newUser: UserModels.User = {
      ...user,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };
    return of(newUser).pipe(delay(300));
  }

  updateUser(user: UserModels.User): Observable<UserModels.User> {
    return of(user).pipe(delay(300));
  }

  // no use of the userId, only remove from state (mock case)
  deleteUser(userId: string): Observable<void> {
    return EMPTY.pipe(delay(300));
  }

  getUserOrders(userId: string): Observable<UserOrdersModels.UserOrder[]> {
    return of(ORDERS_MOCK).pipe(
      delay(300),
      map((orders) => orders.filter((order) => order.userId === userId))
    );
  }
}
