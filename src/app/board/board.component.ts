import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  square!: any[];
  counter: number = 0;
  xIsNext!: boolean;
  winner!: string;
  isChange: boolean = false;
  gameEnded:string='';
  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.square = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.counter = 0;
    this.gameEnded='';
  }
  get Player() {
    return this.xIsNext ? 'Player1' : 'Player2';
  }
  makeMove(index: number) {
    if(!this.gameEnded){
      if (this.counter < 6) {
        //first 6 times
        if (!this.square[index]) {
          this.square.splice(index, 1, this.Player);
          this.xIsNext = !this.xIsNext;
          this.counter++;
        }
        console.log(this.counter);
      } else if(this.counter>=6 ) {
        if (this.isChange==false) {
          // counter>=6 & this.isChange==false
          if (this.square[index] == this.Player) {
            this.square.splice(index, 1, null);
            this.xIsNext = this.xIsNext;
            this.isChange = true;
          }
        }else if(this.isChange==true){
          // counter>=6 & this.isChange==true
          if (this.square[index] == null ) {
            this.square.splice(index, 1, this.Player);
            this.xIsNext = !this.xIsNext;
            this.counter++;
            this.isChange = false;
            console.log('test')
          }
        }
        console.log(this.counter);
      }
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.square[a] &&
        this.square[a] === this.square[b] &&
        this.square[a] === this.square[c]
      ) {
        this.gameEnded='Game Ended start a new game';
        console.log(this.square[a]);

        return this.square[a];
      }
    }
    console.log(null);
    return null;
  }
}
