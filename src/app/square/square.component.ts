import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-square',
  // templateUrl: './square.component.html',
  template:`
    <button class="bg-light" *ngIf="value=='..'">{{value}}</button>
    <button class="bg-light" *ngIf="value==null">{{value}}</button>
    <button class="btn btn-danger" *ngIf="value=='Player1'">{{value}}</button>
    <button class="btn btn-warning" *ngIf="value=='Player2'">{{value}}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
@Input() value !:'Player1'|'Player2'|'..';

  constructor() { }

  ngOnInit(): void {

  }

}
