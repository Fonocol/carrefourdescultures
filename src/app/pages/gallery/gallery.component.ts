import { Component, OnInit,HostListener } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
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

  lightboxActive = false;
  currentImageIndex: number | null = null;
  lightboxImage: any = null;

  // Ouvre le lightbox avec l'image cliquée
  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.lightboxImage = this.images[index];
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden'; 
  }

  // Ferme le lightbox
  closeLightbox() {
    this.lightboxActive = false;
    this.currentImageIndex = null;
    this.lightboxImage = null;
    document.body.style.overflow = ''; 
  }

  // Navigation entre les images
  navigate(direction: 'prev' | 'next') {
    if (this.currentImageIndex === null) return;

    if (direction === 'prev') {
      this.currentImageIndex = this.currentImageIndex > 0 ? 
        this.currentImageIndex - 1 : 
        this.images.length - 1;
    } else {
      this.currentImageIndex = this.currentImageIndex < this.images.length - 1 ? 
        this.currentImageIndex + 1 : 
        0;
    }
    this.lightboxImage = this.images[this.currentImageIndex];
  }

  // Gestion des touches clavier
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.lightboxActive) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowLeft':
        this.navigate('prev');
        break;
      case 'ArrowRight':
        this.navigate('next');
        break;
    }
  }
}