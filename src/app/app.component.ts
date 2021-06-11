import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReversiGameEngineService } from './reversi-game-engine.service';
import { Component } from '@angular/core';
import { GameState, TileCoords } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  obs: Observable<GameState & {playable: boolean[][]}>;
  constructor(private gs: ReversiGameEngineService){
    this.obs = gs.gameStateObs.pipe(
      map( g => ({
        ...g,
        playable: g.board.map(
            (L, i) => L.map( (C,j) => gs.PionsTakenIfPlayAt(i,j).length > 0)
          )
      })    )
    );
  }

  newDeplacement([x, y]: TileCoords): void {
    console.log("Attention ca publie!!");
    console.log("Ca a publie : ",x, " ", y);
    this.gs.play(x,y);

  }

  /*
  //attribut calculé
  get obs(): Observable<GameState> {
    return this.gs.gameStateObs;
  }
  */
}
