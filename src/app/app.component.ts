import { Component } from '@angular/core';
import { UsersComponent } from "./features/users/users.component";

@Component({
  selector: 'app-root',
  imports: [UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fmr-home-assignment';
}
