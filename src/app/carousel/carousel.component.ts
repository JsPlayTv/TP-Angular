import { Component, OnInit } from '@angular/core';

interface Image{
  src: string;
  alt: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  lesImages: Image[] = [
    { src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png", alt:0},
    { src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1024px-NYCS-bull-trans-2.svg.png", alt:1},
    { src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1024px-NYCS-bull-trans-3.svg.png", alt:2},
    { src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NYCS-bull-trans-4-red.svg/1200px-NYCS-bull-trans-4-red.svg.png", alt:3},
  ]
  imageAffich:Image={
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
    alt:0
  }

  constructor() { 
    setTimeout(() => this.changeImage(), 2000)
  }

  ngOnInit(): void {
  }

  changeImage(){
    const nImage:number=this.imageAffich.alt;
    if (nImage === 0){
      
    }
     //const imageSuiv = this.imageAffich.alt + 1;
      //this.imageAffich.alt = imageSuiv
      //console.log("Image affiché n°", imageSuiv);
  }

}
