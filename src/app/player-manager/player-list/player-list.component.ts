import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

    //private playerService: PruitService = new PlayerService();
    private _PlayerFirstName: string = "";
    private _PlayerLastName: string ="";
    private _PlayerTeamId: number=0;
    private _PlayerPosition: string="";
    private _PlayerAge: number=0;

   // Injection de dépendance
   constructor(private playerService: PlayerService) {
    //this.players = this.playerService.getPlayer();
  }

  ngOnInit(): void {
    //this.fruits.push(this.fruitService.getSuperFruit())
    this.playerService.getPlayerAjax()
      .subscribe((players: Player[]) => {
        this.players = players;
      })
  }

  save() {
    // requête ajax
    let player: Player = {
      firstname: this._PlayerFirstName,
      lastname: this._PlayerLastName,
      teamid: this._PlayerTeamId,
      position: this._PlayerPosition,
      age: this._PlayerAge
    }
    this.playerService.postPlayer(player)
      .subscribe((player: Player) => {
        this.players.push(player);
      });
  }

  onKeyup(event :any) {
    let value = event.target.value;

    // Todo: vérifier value
    this._PlayerFirstName = value;
  }

}
