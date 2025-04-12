import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
  newPostContent: string = '';
  currentFilter: string = 'all';
  loading: boolean = true;
  posts: any[] = [
    {
      id: 1,
      author: {
        name: 'Lamah Richard',
        avatar: 'assets/users/richard.jpg',
        role: 'Chargé de communication'
      },
      date: new Date('2023-05-15T14:30:00'),
      content: 'Superbe journée lors de notre dernier atelier de dessin du BDA ! Merci à tous les participants pour cette énergie incroyable.',
      images: ['assets/actualites/a1.jpg'],
      likes: 24,
      comments: [
        {
          author: { name: 'Onion POPO', avatar: 'assets/users/onionpopo.jpg' },
          text: 'C\'était vraiment génial, merci pour l\'organisation !',
          date: new Date('2023-05-15T15:45:00')
        },
        {
          author: { name: 'Fono', avatar: 'assets/users/colince.jpg' },
          text: "L'ambiance était incroyable, on se serait cru au Maroc ! Hâte de participer à la prochaine édition.",
          date: new Date('2023-05-15T16:30:00')
        }
      ],
      tags: ['#échangeculturel', '#danse'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 2,
      author: {
        name: 'Bureau des Étudiants',
        avatar: 'assets/partners/bde.png',
        role: 'Organisation'
      },
      date: new Date('2023-05-10T09:15:00'),
      content: '📢 COMMUNIQUÉ OFFICIEL : La prochaine réunion interculturelle aura lieu vendredi 19 mai à 18h en salle B12.',
      likes: 56,
      comments: [
        {
          author: { name: 'Delphine TOVIEGBE', avatar: 'assets/users/delphine.png' },
          text: "Nous comptons sur une présence massive ! Ce festival sera l'occasion de mettre en avant la diversité culturelle de notre école.",
          date: new Date('2023-05-10T10:00:00')
        },
        {
          author: { name: 'Rémi Raoul', avatar: 'assets/users/remi.jpg' },
          text: 'Je vais préparer la partie budget, tout doit être prêt pour cette réunion importante.',
          date: new Date('2023-05-10T11:15:00')
        }
      ],
      tags: ['#annonce'],
      type: 'announcement',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 3,
      author: {
        name: 'Picasso',
        avatar: 'assets/users/picasso.png',
        role: 'Vice-président'
      },
      date: new Date('2023-05-12T16:00:00'),
      content: 'Une belle journée de préparation pour nos prochains événements ! On compte sur votre participation et vos idées pour enrichir notre programme. #collaboration #créativité',
      likes: 32,
      comments: [
        {
          author: { name: 'Marouan', avatar: 'assets/users/marouan.jpg' },
          text: "Un plaisir de collaborer avec tout le monde ! Les idées fusent, et j'ai hâte de voir ce que nous allons proposer ensemble.",
          date: new Date('2023-05-12T16:45:00')
        },
        {
          author: { name: 'Fono', avatar: 'assets/users/colince.jpg' },
          text: "Les événements à venir promettent d'être géniaux, je suis super excité par ce qu'on prépare !",
          date: new Date('2023-05-12T17:30:00')
        }
      ],
      tags: ['#collaboration', '#créativité'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 4,
      author: {
        name: 'Fono',
        avatar: 'assets/users/colince.jpg',
        role: 'Chargé des événements'
      },
      date: new Date('2023-05-16T11:45:00'),
      content: "Un grand merci à tous ceux qui ont participé à la compétition de dessin organisée par le BDA ! J'ai eu l'honneur de remporter le second prix, mais c'est l'esprit de compétition et la créativité qui m'ont le plus marqué. Bravo à tous ! #compétition #créativité",
      images: ['assets/actualites/a3.jpg'],
      likes: 18,
      comments: [
        {
          author: { name: 'Delphine TOVIEGBE', avatar: 'assets/users/delphine.png' },
          text: 'Bravo Fono, un bel esprit de partage et de créativité ! Hâte de voir tes futurs projets !',
          date: new Date('2023-05-16T12:30:00')
        },
        {
          author: { name: 'Rémi Raoul', avatar: 'assets/users/remi.jpg' },
          text: 'Félicitations Fono, ce prix est bien mérité ! Une belle représentation de notre culture visuelle.',
          date: new Date('2023-05-16T13:00:00')
        }
      ],
      tags: ['#compétition', '#créativité'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 5,
      author: {
        name: 'Delphine TOVIEGBE',
        avatar: 'assets/users/delphine.png',
        role: 'Présidente'
      },
      date: new Date('2023-05-18T14:00:00'),
      content: 'Notre équipe a mis tout son cœur dans la préparation des événements à venir. Ensemble, nous allons faire briller la culture ! Merci à tous pour votre investissement. #équipe #passion',
      likes: 40,
      comments: [
        {
          author: { name: 'Picasso', avatar: 'assets/users/picasso.png' },
          text: "Merci Delphine pour ton leadership et ta vision, c'est grâce à toi que tout se passe bien.",
          date: new Date('2023-05-18T15:00:00')
        },
        {
          author: { name: 'Marouan', avatar: 'assets/users/marouan.jpg' },
          text: "Une équipe au top ! J'ai hâte de partager ces moments avec vous tous.",
          date: new Date('2023-05-18T15:45:00')
        }
      ],
      tags: ['#équipe', '#passion'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 6,
      author: {
        name: 'Marouan',
        avatar: 'assets/users/marouan.jpg',
        role: 'Chargé des relations extérieures'
      },
      date: new Date('2023-05-14T10:00:00'),
      content: "Rencontre enrichissante avec plusieurs associations culturelles pour discuter de futures collaborations. Carrefour de Culture ne cesse d'élargir son réseau ! #partenariats #réseautage",
      likes: 28,
      comments: [
        {
          author: { name: 'Picasso', avatar: 'assets/users/picasso.png' },
          text: "Ça va être génial d'avoir plus de collaborations externes. De grandes opportunités à venir !",
          date: new Date('2023-05-14T11:15:00')
        }
      ],
      tags: ['#partenariats', '#réseautage'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 7,
      author: {
        name: 'Rémi Raoul',
        avatar: 'assets/users/remi.jpg',
        role: 'Trésorier'
      },
      date: new Date('2023-05-13T09:30:00'),
      content: 'La gestion financière du projet avance bien ! Le budget pour le festival des cultures est quasiment finalisé. Restons organisés pour garantir le succès de notre événement ! #gestion #finance',
      likes: 22,
      comments: [
        {
          author: { name: 'Fono', avatar: 'assets/users/colince.jpg' },
          text: 'Merci Rémi pour ton travail impeccable. Nous serons prêts pour le festival.',
          date: new Date('2023-05-13T10:30:00')
        }
      ],
      tags: ['#gestion', '#finance'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 8,
      author: {
        name: 'Ecole EILCO',
        avatar: 'assets/partners/eilco.png',
        role: 'Institution'
      },
      date: new Date('2023-05-19T10:00:00'),
      content: 'Lancement officiel des activités culturelles du semestre ! Venez nombreux aux événements organisés par les associations étudiantes, notamment le festival des cultures le 25 mai. #vieétudiante #événements',
      likes: 75,
      comments: [
        {
          author: { name: 'Picasso', avatar: 'assets/users/picasso.png' },
          text: "Ce sera une superbe occasion de découvrir de nouvelles cultures. J'ai hâte !",
          date: new Date('2023-05-19T10:30:00')
        },
        {
          author: { name: 'Delphine TOVIEGBE', avatar: 'assets/users/delphine.png' },
          text: "Un événement à ne pas manquer ! Toute l'équipe est prête à faire de ce festival un grand succès.",
          date: new Date('2023-05-19T11:00:00')
        }
      ],
      tags: ['#vieétudiante', '#événements'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 9,
      author: {
        name: 'Carrefour de Culture',
        avatar: 'assets/logo.jpg',
        role: 'Association Étudiante'
      },
      date: new Date('2023-05-20T10:00:00'),
      content: '🎉 Suivez-nous sur Instagram ! 📲 Retrouvez toutes nos actualités, événements et moments forts en images ! Ne manquez rien de notre belle aventure culturelle. #suiveznous #réseauxsociaux #CarrefourDeCulture',
      images: ['assets/actualites/insta.png'],
      likes: 120,
      comments: [
        {
          author: { name: 'Fono', avatar: 'assets/users/colince.jpg' },
          text: 'On va poster des photos de nos événements les plus fous, suivez-nous !',
          date: new Date('2023-05-20T11:30:00')
        },
        {
          author: { name: 'Delphine TOVIEGBE', avatar: 'assets/users/delphine.png' },
          text: 'Le contenu que nous allons partager va être incroyable ! Suivez-nous pour découvrir des moments inoubliables.',
          date: new Date('2023-05-20T12:00:00')
        }
      ],
      tags: ['#suiveznous', '#réseauxsociaux', '#CarrefourDeCulture'],
      type: 'announcement',
      liked: false,
      saved: false,
      showComments: true
    },
    {
      id: 10,
      author: {
        name: "OnionPOPO",
        avatar: "assets/users/onionpopo.jpg",
        role: "Membre Philosophe"
      },
      date: new Date("2025-04-12T15:30:00"),
      content: "🌿 La vérité se cache dans l'invisible. Si l'asso était une question, qu’est-ce que la réponse ? On parle souvent d’avancer ensemble, mais peut-être qu’on avance tout en restant immobiles. N’est-ce pas là le paradoxe de notre quête commune ? #Réflexion #ParadoxeCollectif #VéritéInvisible",
      images: ["assets/actualites/onion.png"],
      likes: 85,
      comments: [
        {
          author: { name: "Rémi", avatar: "assets/users/remi.jpg" },
          text: "Peut-être que la réponse, c'est d'accepter de ne pas en avoir. Le chemin lui-même est ce qui compte.",
          date: new Date("2025-04-12T16:00:00")
        },
        {
          author: { name: "Fono", avatar: "assets/users/colince.jpg" },
          text: "On pourrait même dire que la quête est un jeu entre le mouvement et l’immobilité. Est-ce qu’on cherche vraiment, ou est-ce que c’est l’idée de chercher qui nous définit ?",
          date: new Date("2025-04-12T16:30:00")
        },
        {
          author: { name: "Richard", avatar: "assets/users/richard.jpg" },
          text: "C’est une perspective intéressante. Si la quête est un paradoxe, alors peut-être que chaque étape nous rapproche plus de l’incompréhension que de la certitude.",
          date: new Date("2025-04-12T17:00:00")
        }
      ],
      tags: ['#Réflexion', '#ParadoxeCollectif', '#VéritéInvisible'],
      type: 'event',
      liked: false,
      saved: false,
      showComments: true
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.posts.sort((a, b) => b.date - a.date);
      this.loading = false;
    }, 1000);
  }

  publishPost(): void {
    if (this.newPostContent.trim()) {
      const newPost = {
        id: this.posts.length + 1,
        author: {
          name: 'Vous',
          avatar: 'assets/logo.jpg',
          role: 'Membre'
        },
        date: new Date(),
        content: this.newPostContent,
        likes: 0,
        comments: [],
        tags: [],
        type: 'post',
        liked: false,
        saved: false,
        showComments: false
      };
      
      this.posts.unshift(newPost);
      this.newPostContent = '';
    }
  }

  addComment(post: any, commentText: string): void {
    if (commentText.trim()) {
      post.comments.push({
        author: {
          name: 'Vous',
          avatar: 'assets/logo.jpg'
        },
        text: commentText,
        date: new Date()
      });
    }
  }

  toggleComments(post: any): void {
    post.showComments = !post.showComments;
  }

  likePost(post: any): void {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
  }

  savePost(post: any): void {
    post.saved = !post.saved;
  }

  sharePost(post: any): void {
    // Implémentation réelle utiliserait les API de partage
    console.log('Partage du post:', post.id);
    alert(`Post "${post.content.substring(0, 30)}..." partagé!`);
  }

  filterPosts(type: string): void {
    this.currentFilter = type;
  }

  get filteredPosts() {
    if (this.currentFilter === 'all') return this.posts;
    return this.posts.filter(post => post.type === this.currentFilter);
  }
}