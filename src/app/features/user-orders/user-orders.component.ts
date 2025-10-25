import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserNameComponent } from './components/user-name/user-name.component';
import { TotalOrdersComponent } from './components/total-orders/total-orders.component';
import { Observable, combineLatest, map } from 'rxjs';
import { UserOrdersModels, UserOrdersSelectors } from './feature-state';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UserModels, UsersSelectors } from '../users/feature-state';

@Component({
  selector: 'app-user-orders',
  imports: [CommonModule, UserNameComponent, TotalOrdersComponent],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOrdersComponent {
  private store = inject(Store);

  userOrderData$: Observable<{
    userOrders: UserOrdersModels.UserOrder[];
    user: UserModels.User | null;
  }> = combineLatest([
    this.store.select(UserOrdersSelectors.selectOrdersByUserId),
    this.store.select(UsersSelectors.selectSelectedUser),
  ]).pipe(
    map(([userOrders, user]) => ({ userOrders, user }))
  );
}
