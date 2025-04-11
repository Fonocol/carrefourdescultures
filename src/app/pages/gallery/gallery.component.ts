import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images = [
    { url: 'assets/event/1.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },
    { url: 'assets/event/2.jpg', alt: 'Spectacle', caption: 'Spectacle multiculturel' },
    { url: 'assets/event/3.jpg', alt: 'Repas africain', caption: 'Buffet partage' },
    { url: 'assets/event/4.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },
    { url: 'assets/event/5.jpg', alt: 'Spectacle', caption: 'Spectacle multiculturel' },
    { url: 'assets/event/6.jpg', alt: 'Repas africain', caption: 'Buffet partage' },
    { url: 'assets/event/home.jpg', alt: 'Soirée dansante', caption: 'Soirée dansante 2023' },

  ];
  

}
