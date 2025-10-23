import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name',
  imports: [],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.scss'
})
export class UserNameComponent {
  @Input() userName!: string;
}
