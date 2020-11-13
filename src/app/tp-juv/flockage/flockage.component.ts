import { Component, OnInit, ViewChild } from '@angular/core';
import { GaleriesComponent } from '../galeries/galeries.component';

@Component({
  selector: 'app-flockage',
  templateUrl: './flockage.component.html',
  styleUrls: ['./flockage.component.css']
})
export class FlockageComponent implements OnInit {
  classFlockClick: string=""
  classNoFlock: string="flock selected"
  classFlock: string="flock"
  classJoueur: string="listNoVisible"
  clickNoFlock:string="noFlock()"
  clickFlock:string="Flock()"

  constructor() { }

  ngOnInit(): void {
  }

  noFlock(){
    this.classNoFlock="flock selected"
    this.classFlock="flock"
    this.classJoueur="listNoVisible"
    this.clickNoFlock="noFlock()"
    this.clickFlock="Flock()"
  }

  Flock(){

    this.classNoFlock="flock"
    this.classFlock="flock selected"
    this.classJoueur="list"
    this.clickNoFlock=""
    this.clickFlock=""
    
  }

}
