import type * as UserModels from '../../features/users/feature-state/users.models';
import type { UserOrder } from '../../features/user-orders/feature-state/user-orders.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from './user-api.service';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly api: UserApiService) {}

  getUsers$(): Observable<UserModels.User[]> {
    return this.api.getUsers();
  }

  getUserById$(id: string): Observable<UserModels.User | undefined> {
    return this.api.getUserById(id);
  }

  getOrdersByUserId$(userId: string): Observable<UserOrder[]> {
    return this.api.getOrdersByUserId(userId);
  }
}
