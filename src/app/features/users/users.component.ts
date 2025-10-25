import type * as UserModels from './feature-state/users.models';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import * as userActions from './feature-state/users.actions';
import { UsersSelectors } from './feature-state';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserOrdersActions } from '../user-orders/feature-state';

@Component({
  selector: 'app-users',
  imports: [CommonModule, ReactiveFormsModule, UserComponent, UserOrdersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  private store = inject(Store);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  users$: Observable<UserModels.User[]> = this.store.select(UsersSelectors.selectAllUsers);
  usersForm: FormGroup = new FormGroup({
    users: new FormArray<FormGroup>([])
  });

  ngOnInit(): void {
    this.store.dispatch(userActions.load());
    this.initializeForm();
  }

  private initializeForm(): void {
    this.users$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(users => {
        const usersArray = this.usersForm.get('users') as FormArray;
        usersArray.clear();

        users.forEach(user => {
          usersArray.push(
            new FormGroup({
              name:  new FormControl<string>(user.name ?? '', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
              email: new FormControl<string>(user.email ?? '', { nonNullable: true, validators: [Validators.required, Validators.email] }),
              userData: new FormControl<UserModels.User>(user)
            })
          );
        });

        this.cdr.markForCheck();
      });
  }

  onAddUser(): void {
    const newUser = {
      name: 'New User',
      email: 'newuser@example.com',
    };

    this.store.dispatch(
      userActions.addUser({
        user: { id: '', createdAt: new Date().toISOString(), ...newUser },
      })
    );
  }

  onSaveUser(updatedUser: UserModels.User): void {
    this.store.dispatch(userActions.updateUser({ user: updatedUser }));
  }

  onDeleteUser(userId: string): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.store.dispatch(userActions.deleteUser({ userId }));
    }
  }

  onDisplayUserOrders(userId: string): void {
    this.store.dispatch(UserOrdersActions.loadUserOrders({ userId }));
  }
}
