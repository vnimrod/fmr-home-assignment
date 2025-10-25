import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserNameComponent } from './components/user-name/user-name.component';
import { TotalOrdersComponent } from './components/total-orders/total-orders.component';
import { Observable } from 'rxjs';
import { UserOrdersModels } from './feature-state';
import { selectOrdersByUserId } from './feature-state/user-orders.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  imports: [CommonModule, UserNameComponent, TotalOrdersComponent],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOrdersComponent {
  private store = inject(Store);
  userOrders$: Observable<UserOrdersModels.UserOrder[]> =
    this.store.select(selectOrdersByUserId);
}
