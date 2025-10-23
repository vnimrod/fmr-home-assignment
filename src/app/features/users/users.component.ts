import type { User } from './feature-state';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import * as userActions from './feature-state/users.actions';
import { UsersSelectors } from './feature-state';

@Component({
  selector: 'app-users',
  imports: [CommonModule, UserComponent, UserOrdersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  private store = inject(Store);
  users$: Observable<User[]> = this.store.select(UsersSelectors.selectAllUsers);

  ngOnInit(): void {
    this.store.dispatch(userActions.loadUsers());
    this.users$.subscribe((users) => console.log(users));
    // dispatch action to get users
  }
}
