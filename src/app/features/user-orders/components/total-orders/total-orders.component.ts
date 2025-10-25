import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UserOrdersModels } from '../../feature-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-orders',
  imports: [CommonModule],
  templateUrl: './total-orders.component.html',
  styleUrl: './total-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalOrdersComponent implements OnChanges {
  @Input() userOrders!: UserOrdersModels.UserOrder[];
  totalOrders!: number;
  totalPrice!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['userOrders']?.currentValue) {
      this.totalOrders = this.userOrders.length;
      this.totalPrice = this.userOrders.reduce((total, order) => {
        return total + order.totalPrice;
      }, 0);
    }
  }
}
