import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  shell: number;
  message: string;
  disabled: boolean;
  gameRunning: boolean;
  constructor() { }

  ngOnInit(): void {
    this.shell = this.randomizeShell();
    this.message = "Click a shell!";
    this.gameRunning = true;
    console.log("shell ", this.shell);
  }

  clickShell(shellNumber: number) {
    if(this.shell === shellNumber )
    {
      this.message = "YOU WIN!";
    }
    else {
      this.message = "LOSER";
    }
    this.disabled = true;
    this.gameRunning = false; 
  }
  resetGame() {
    this.disabled = false;
    this.gameRunning = true;
    this.shell = this.randomizeShell();
    this.message = "Click a shell!";
  }
  randomizeShell(): number {
    return Math.floor(Math.random() * Math.floor(3));
  }
}
