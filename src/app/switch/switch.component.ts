import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  // Déclaration de la variable du boutton
  valeurBtn:string = 'oui'

  constructor() { }

  ngOnInit(): void {
  }

  // Fonction de changement du Bouton
  SwitchBtn(val){
    // Passage à NON
    if(val=='oui'){
      this.valeurBtn='non';
      console.log("Valeur non = 0")
    }
    // Passage à OUI
    else {
      this.valeurBtn='oui'; 
      console.log("Valeur oui = 1") 
    }
  }

}
