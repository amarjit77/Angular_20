import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { Databinding } from "./components/databinding/databinding";
import { SignalEx } from './components/signal-ex/signal-ex';

@Component({
  selector: 'app-root',
  imports: [Admin, User, Databinding, SignalEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20Tutorial';
}
