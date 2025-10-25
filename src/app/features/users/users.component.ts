import type * as UserModels from './feature-state/users.models';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
  users$: Observable<UserModels.User[]> = this.store.select(
    UsersSelectors.selectAllUsers
  );

  ngOnInit(): void {
    this.store.dispatch(userActions.load());
  }

  addUser(): void {
    const newUser = {
      name: 'New User',
      email: 'newuser@example.com',
    };

    // The id will be added on the service.
    this.store.dispatch(
      userActions.addUser({
        user: { id: '', createdAt: new Date().toISOString(), ...newUser },
      })
    );
  }
}
