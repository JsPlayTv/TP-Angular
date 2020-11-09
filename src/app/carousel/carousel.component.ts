import { Component, OnInit } from '@angular/core';

// Déclaration du type de valeur pour l'image
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
  // Déclaration du tableau d'images
  lesImages: Image[] = [
    { src:"https://www.speedway.fr/30762-large_default/numeros-de-course-0-blackbird-bihr-blanc.jpg", alt:0},
    { src:"https://www.speedway.fr/30763-large_default/numeros-de-course-1-blackbird-bihr-blanc.jpg", alt:1},
    { src:"https://www.speedway.fr/30753-large_default/numeros-de-course-2-blackbird-bihr-blanc.jpg", alt:2},
    { src:"https://www.speedway.fr/30759/numero-de-course-3-blackbird-bihr-blanc.jpg", alt:3},
    { src:"https://www.speedway.fr/30764/numero-de-course-4-blackbird-bihr-blanc.jpg", alt:4},
    { src:"https://www.speedway.fr/30754-large_default/numeros-de-course-5-blackbird-bihr-blanc.jpg", alt:5},
    { src:"https://www.speedway.fr/30751-large_default/numeros-de-course-6-blackbird-bihr-blanc.jpg", alt:6},
    { src:"https://www.speedway.fr/30757-large_default/numeros-de-course-7-blackbird-bihr-blanc.jpg", alt:7},
    { src:"https://www.speedway.fr/30758-large_default/numeros-de-course-8-blackbird-bihr-blanc.jpg", alt:8},
    { src:"https://www.speedway.fr/30755-large_default/numeros-de-course-9-blackbird-bihr-blanc.jpg", alt:9},
  ]
  // Déclaration de la Variable du compteur d'image
  nImage:number=0;
  // Déclaration des valeur de l'image
  imageAffich:Image={
    src:this.lesImages[this.nImage].src,
    alt:this.lesImages[this.nImage].alt
  }


  constructor() { 
    // Déclaration de l'interval à 1 secondes
    setInterval(() => this.changeImage(), 1000)
    console.log("Image affiché n°",this.lesImages[this.nImage].alt);
  }

  ngOnInit(): void {
  }

  // Fonction de changement de l'image
  changeImage(){
    // Si c'est la dernière image
    if (this.nImage===9){
      console.log("Limite atteinte --> Retour")
      this.nImage=0;
      this.imageAffich.src=this.lesImages[this.nImage].src;
      this.imageAffich.alt=this.lesImages[this.nImage].alt;
      console.log("Image affiché n°",this.lesImages[this.nImage].alt)
    }
    // Si c'est pas la dernière
    else {
      this.nImage++;
      this.imageAffich.src=this.lesImages[this.nImage].src;
      this.imageAffich.alt=this.lesImages[this.nImage].alt;
      console.log("Image affiché n°",this.lesImages[this.nImage].alt)
    }

  }

}
