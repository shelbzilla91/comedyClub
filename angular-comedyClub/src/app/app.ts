import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './pages/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:true,
})
export class App {
  protected readonly title = signal('angular-comedyClub');


}
