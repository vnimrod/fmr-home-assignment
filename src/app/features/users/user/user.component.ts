import type * as UserModels from '../feature-state/users.models';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as usersActions from '../feature-state/users.actions';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  @Input() user!: UserModels.User;

  userForm!: FormGroup;
  isEdit = false;

  private store = inject(Store);

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit;
    if (!this.isEdit) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
      });
    }
  }

  updateUser(): void {
    if (this.userForm.valid) {
      this.store.dispatch(
        usersActions.updateUser({
          user: { id: this.user.id, ...this.userForm.value },
        })
      );
      this.isEdit = false;
    }
  }

  deleteUser(): void {
    // Dispatch action to delete user
  }
}
