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
    'assets/img/pizza-meme4.jpg',
    'assets/img/pizza-meme5.jpg',
    'assets/img/pizza-meme6.jpg'
  ];

  //Variable to hold the current meme index
  private currentIndex: number = 0;

  //The Signal that holds the current meme path
  protected currentMemePath = signal(this.memePaths[0]);


  //Method to change the image when the button is clicked
  generateNewMeme() {
   
  // This increments the index, or resets it to 0 if it exceeds the array bounds.
  this.currentIndex = (this.currentIndex + 1) % this.memePaths.length;

  // Update the signal with the new meme path
  this.currentMemePath.set(this.memePaths[this.currentIndex]);

}

}

