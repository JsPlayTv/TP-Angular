import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeries',
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.css']
})
export class GaleriesComponent implements OnInit {
  indiceImg:number =1
  @Input() imageAffich: string = "assets/images/"+this.indiceImg+".jpg"

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(indice:number){
    this.indiceImg=indice
    this.imageAffich="assets/images/"+this.indiceImg+".jpg"
  }

}
