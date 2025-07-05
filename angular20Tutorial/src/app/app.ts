import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";

@Component({
  selector: 'app-root',
  imports: [Admin, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
}
