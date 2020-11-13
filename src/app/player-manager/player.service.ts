import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player';

const API = "http://localhost:3000/players";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: string[] = [""];

  // Injection du service HttpClient
  constructor(private http: HttpClient) { }

  getPlayer(): string[] {
    return this.players;
  }

  getPlayerAjax() {
    // On retourne l'observable
    // Pas de subscribe à ce niveau
    return this.http.get(API);
  }

  getSuperPlayer(): string {
    return "EL RONALDO";
  }

  postPlayer(player: Player) {
    return this.http.post(API, player);
  }
}
