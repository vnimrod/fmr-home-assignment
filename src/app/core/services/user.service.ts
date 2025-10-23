import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import type { User } from '../../features/users/feature-state/users.models';
import { UserApiService } from './user-api.service';
import { UserOrder } from '../../features/user-orders/feature-state/user-orders.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly api: UserApiService) {}

  getUsers$(): Observable<User[]> {
    return this.api.getUsers();
  }

  getUserById$(id: string): Observable<User | undefined> {
    return this.api.getUserById(id);
  }

  getUserOrders$(userId: string): Observable<UserOrder[]> {
    return this.api.getOrdersByUserId(userId);
  }
}
