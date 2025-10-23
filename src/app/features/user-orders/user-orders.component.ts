import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserNameComponent } from "./components/user-name/user-name.component";
import { TotalOrdersComponent } from "./components/total-orders/total-orders.component";

@Component({
  selector: 'app-user-orders',
  imports: [UserNameComponent, TotalOrdersComponent],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOrdersComponent {
  
}
