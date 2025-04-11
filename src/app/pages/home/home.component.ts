import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  phrases: string[] = [
    'مرحبا بكم في ملتقى تنوع الثقافات ',
    'Bienvenue au Carrefour des Cultures',
    'Welcome to the Cultural Crossroads',
    'Karibu kwenye Mkutano wa Tamaduni',
    'Bienvenue à tous 🌍✨'
  ];


  displayedText: string = '';
  private phraseIndex: number = 0;
  private letterIndex: number = 0;
  private isDeleting: boolean = false;

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

  ngOnInit() {
    this.typeEffect();
  }

  


}
