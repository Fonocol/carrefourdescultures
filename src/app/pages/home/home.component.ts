import { Component, OnInit, HostListener } from '@angular/core';
import { Member } from '../../interface/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phrases: string[] = [
    'مرحبا بكم في ملتقى تنوع الثقافات',
    'Bienvenue au Carrefour des Cultures',
    'Welcome to the Cultural Crossroads',
    'Karibu kwenye Mkutano wa Tamaduni',
    'Bienvenue à tous 🌍✨'
  ];

  displayedText: string = '';
  private phraseIndex: number = 0;
  private letterIndex: number = 0;
  private isDeleting: boolean = false;

  baseUrl = 'assets/event/';
  images:any[]=[];
  members: Member[] = [
    {
      name: 'Delphine Toviegbe',
      title: 'Présidente',
      photoUrl: 'assets/users/delphine.png',
      message: 'Carrefour des Cultures n\'est pas qu\'une association. C\'est une aventure humaine, un lieu d\'ouverture où chaque culture trouve sa voix. Ensemble, construisons des ponts, pas des murs.'
    },
    {
      name: 'Fono Colince',
      title: 'Chargé des événements',
      photoUrl: 'assets/users/colince.jpg',
      message: 'Ce club, c’est mon laboratoire d’idées et mon terrain de jeu...'
    },
    {
      name: 'Lamah Richard',
      title: 'Chargé de communication',
      photoUrl: 'assets/users/richard.jpg',
      message: 'Carrefour des Cultures me pousse à raconter des histoires...'
    },
    {
      name: 'Picasso',
      title: 'Vice-président',
      photoUrl: 'assets/users/picasso.png',
      message: 'Être au Carrefour, c’est participer à une œuvre collective...'
    },
    {
      name: 'Rémi Raoul',
      title: 'Trésorier',
      photoUrl: 'assets/users/remi.jpg',
      message: 'Dans un monde de chiffres, Carrefour m’a montré le vrai capital...'
    },
    {
      name: 'Marouan',
      title: 'Chargé des relations extérieures',
      photoUrl: 'assets/users/marouan.jpg',
      message: 'Ce que je vis ici dépasse les simples échanges...'
    },
    {
      name: 'OnionPOPO',
      title: 'Membre Philosophe',
      photoUrl: 'assets/users/image.png',
      message: 'Ce club est une énigme vivante. On s’y cherche autant qu’on s’y trouve...'
    }
  ];
  
  currentIndex = 0;
  private slideInterval: any;
  imagesLoaded = false;

  typeEffect() {
    const current = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.displayedText = current.substring(0, this.letterIndex--);
    } else {
      this.displayedText = current.substring(0, this.letterIndex++);
    }

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.letterIndex === current.length) {
      this.isDeleting = true;
      delay = 1500;
    } else if (this.isDeleting && this.letterIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 500;
    }

    setTimeout(() => this.typeEffect(), delay);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const slideshow = event.target as HTMLElement;
    if (slideshow.classList.contains('slideshow-container')) {
      const rect = slideshow.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      slideshow.style.setProperty('--x', `${x}px`);
      slideshow.style.setProperty('--y', `${y}px`);
    }
  }

  ngOnInit() {
    for(let i=1; i<=41; i++){
      if (i>=1 && i<=6){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Échange linguistique', caption: 'Échange linguistique'}); 
      }
      else if (i>=15 && i<=22){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Jeux Internationaux', caption: 'Jeux Internationaux'});
      }
      else if (i>=30 && i<=35){
        this.images.push({url: this.baseUrl + i.toString() + '.jpg', alt: 'Projection d\'un film culturel', caption: 'Projection d\'un film culturel'});
      }
    }
    this.typeEffect();
    this.startSlideShow();
    
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 500);
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }
}






















