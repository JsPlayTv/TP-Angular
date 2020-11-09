import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  valeurBtn:string = 'oui'

  constructor() { }

  ngOnInit(): void {
  }

  SwitchBtn(val){
    if(val=='oui'){
      this.valeurBtn='non';
      console.log("Valeur non = 0")
    }
    else {
      this.valeurBtn='oui'; 
      console.log("Valeur oui = 1") 
    }
  }

}
