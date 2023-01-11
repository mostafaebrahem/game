import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-square',
  // templateUrl: './square.component.html',
  template:`
    <button class="bg-dark" *ngIf="value==null">{{value}}</button>
    <button class="btn btn-danger" *ngIf="value=='X'">{{value}}</button>
    <button class="btn btn-warning" *ngIf="value=='O'">{{value}}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
@Input() value !:'X'|'O';

  constructor() { }

  ngOnInit(): void {

  }

}
