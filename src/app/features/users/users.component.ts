import { Component, OnInit } from '@angular/core';
import { USERS_MOCK } from '../../core/mocks/users.mock'; // remove later
import { Observable, of } from 'rxjs';
import { User } from './feature-state/users.models';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserOrdersComponent } from "../user-orders/user-orders.component";

@Component({
  selector: 'app-users',
  imports: [CommonModule, UserComponent, UserOrdersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = of(USERS_MOCK); // remove later come from store

  ngOnInit(): void {
    // dispatch action to get users
  }
}
