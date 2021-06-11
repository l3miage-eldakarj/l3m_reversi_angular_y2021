import { Board_RO, getEmptyBoard, Turn } from './../ReversiDefinitions';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlateauComponent implements OnInit {
  @Input() board: Board_RO = getEmptyBoard();
  @Input() turn: Turn = "Player1";
  @Input() playable: boolean[][]=[];
  constructor() { }

  ngOnInit(): void {
  }


}
