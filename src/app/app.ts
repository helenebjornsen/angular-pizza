import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('angular-pizza-wsl');
=======
  protected readonly title = signal('angular-pizza');
>>>>>>> f662b3ae60cf06070db5c098342e4ae90af0f9d0
}
