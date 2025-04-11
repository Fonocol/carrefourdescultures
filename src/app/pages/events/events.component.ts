import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events = [
    {
      title: "Échange linguistique",
      date: "Octobre 2024",
      flyer: "assets/flayer/event 1.jpg",
      description: "Créer un moment d'échange autour des langues parlées par les membres et participants pour favoriser la découverte culturelle et l'inclusion.",
      activities: [
        { name: "Partage d'expressions linguistiques", time: "10:00 - 11:30" }
      ],
      partners: ["EILCO", "BDE", "Maison des Langues"]
    },
    {
      title: "Jeux Internationaux",
      date: "Décembre 2024",
      flyer: "assets/flayer/event 3.jpg",
      description: "Moment de partage culturel à travers des jeux de réflexion et traditionnels.",
      activities: [
        { name: "Partage linguistique", time: "10:00 - 11:00" },
        { name: "Jeux de réflexion (Awalé)", time: "11:15 - 12:15" },
        { name: "Jeux traditionnels (Amina, Bountou)", time: "12:30 - 13:30" },
        { name: "Jeux de cartes", time: "14:00 - 15:00" }
      ],
      partners: ["EILCO", "BDE", "AFRAMED"]
    },
    {
      title: "Projection d'un film culturel",
      date: "Mars 2025",
      flyer: "assets/flayer/event 2.jpg",
      description: "Projection du film *The Woman King* (2022), célébrant la force des femmes africaines.",
      activities: [
        { name: "Projection du film", time: "16:00 - 18:00" },
        { name: "Discussion thématique", time: "18:15 - 19:00" }
      ],
      partners: ["CinéAfrique", "EILCO", "Institut Français"]
    }
  ];

}
