import { Component, Input } from '@angular/core';
import { User } from '../feature-state/users.models';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: User;
}
