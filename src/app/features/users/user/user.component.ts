import type * as UserModels from '../feature-state/users.models';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user!: UserModels.User;
  @Input() nameControl!: FormControl;
  @Input() emailControl!: FormControl;
  @Output() userSaved = new EventEmitter<{
    userId: string;
    updatedUser: UserModels.User;
  }>();
  @Output() userDeleted = new EventEmitter<string>();
  @Output() userOrdersClicked = new EventEmitter<string>();

  isEditing = false;

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  onSave(): void {
    if (this.nameControl.invalid || this.emailControl.invalid) {
      return;
    }

    const updatedUser = {
      ...this.user,
      name: this.nameControl.value,
      email: this.emailControl.value,
    };

    this.userSaved.emit({ userId: this.user.id, updatedUser });
    this.isEditing = false;
  }

  onCancel(): void {
    this.isEditing = false;
    // Reset form controls to original values
    this.nameControl.patchValue(this.user.name);
    this.emailControl.patchValue(this.user.email);
  }

  onDelete(): void {
    this.userDeleted.emit(this.user.id);
  }

  onDisplayUserOrders(): void {
    this.userOrdersClicked.emit(this.user.id);
  }
}
