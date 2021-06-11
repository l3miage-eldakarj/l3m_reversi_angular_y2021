import { Board_RO, getEmptyBoard, Turn, TileCoords } from './../ReversiDefinitions';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

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
  @Output() play = new EventEmitter<TileCoords>();

  constructor() { }

  ngOnInit(): void {
  }

  trackByIndex(index: number, e: any): number {
    return index;
  }

  PLAY(x: number, y: number): void {
    this.play.emit( [x, y] );
  }
}
