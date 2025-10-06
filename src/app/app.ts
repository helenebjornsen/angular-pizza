import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemeDisplayComponent } from './meme-display/meme-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MemeDisplayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pizza til grads!');
}
