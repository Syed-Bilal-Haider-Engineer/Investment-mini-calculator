import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInput } from "./user-input/user-input";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment-mini-calculator');
}
