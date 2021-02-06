import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Board_RO, C, getEmptyBoard, Turn } from '../ReversiDefinitions';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlateauComponent implements OnInit {
	@Input() board: Board_RO = getEmptyBoard();
	@Input() turn: Turn = "Player1";
	@Input() playable: boolean[][] = [];
  @Output() play = new EventEmitter<[number, number]>();

  constructor() { }

  ngOnInit(): void {
  }

  /*trackByIndex(i: number, c: C) {
    return i;
  }*/
}
