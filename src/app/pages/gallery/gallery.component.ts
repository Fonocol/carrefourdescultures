import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {


  baseUrl = 'assets/event/';
  images:any[]=[];
  ngOnInit(): void {
    for(let i=1; i<=41; i++){
      if (i>=1 && i<=6){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Échange linguistique', caption: 'Échange linguistique'}); 
      }
      else if (i>=7 && i<=24){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Jeux Internationaux', caption: 'Jeux Internationaux'});
      }
      else if (i>=25 && i<=41){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Projection d\'un film culturel', caption: 'Projection d\'un film culturel'});
      }
    }
  }

  // images = [
  //   { url: 'assets/event/1.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },
  //   { url: 'assets/event/2.jpg', alt: 'Spectacle', caption: 'Spectacle multiculturel' },
  //   { url: 'assets/event/3.jpg', alt: 'Repas africain', caption: 'Buffet partage' },
  //   { url: 'assets/event/4.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },
  //   { url: 'assets/event/5.jpg', alt: 'Spectacle', caption: 'Spectacle multiculturel' },
  //   { url: 'assets/event/6.jpg', alt: 'Repas africain', caption: 'Buffet partage' },
  //   { url: 'assets/event/home.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },

  // ];
  

}
