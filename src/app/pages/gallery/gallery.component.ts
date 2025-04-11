import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
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