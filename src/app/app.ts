import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('Pizza til grads!');
  //protected imagePath = 'assets/img/pizza-meme.jpg';

  //Array of possible meme paths
  private readonly memePaths = [
    'assets/img/pizza-meme.jpg',
    'assets/img/pizza-meme2.jpg',
    'assets/img/pizza-meme3.jpg',
  ];

  //Signal to hold the current image path
  protected currentMemePath = signal(this.memePaths[0]);

  //Method to change the image when the button is clicked
  generateNewMeme() {
    let newIndex: number;
    let currentPath = this.currentMemePath();

    //Ensure the new image is different from the current one
    do {
      newIndex = Math.floor(Math.random() * this.memePaths.length);
    } while (this.memePaths[newIndex] === currentPath);

    this.currentMemePath.set(this.memePaths[newIndex]);

}

}

