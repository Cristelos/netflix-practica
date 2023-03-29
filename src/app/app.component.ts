import { nextflixI } from './models/netflix.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  
  comedia: nextflixI ={
    title: 'comedias',
    gallery: [
      {
        src: "./assets/images/Comedia/casi300.webp",
        alt: 'Casi 300',
      },
      {
        src: "./assets/images/Comedia/cazafantasmas.webp",
        alt: 'Caza fantasmas',
      },
      {
        src: "./assets/images/Comedia/dictador.webp",
        alt: 'El dictador',
      },
      {
        src: "./assets/images/Comedia/erasehollywood.webp",
        alt: 'Érase una vez en Hollywood',
      },
      {
        src: "./assets/images/Comedia/familyguy.webp",
        alt: 'Padre de familia',
      },
      {
        src: "./assets/images/Comedia/juerga.webp",
        alt: 'Juerga hasta el fin',
      },
      {
        src: "./assets/images/Comedia/laterminal.webp",
        alt: 'La terminal',
      },
      {
        src: "./assets/images/Comedia/padresella.webp",
        alt: 'Los padres de ella',
      },
      {
        src: "./assets/images/Comedia/regresofuturo.webp",
        alt: 'Regreso al futuro',
      },
      {
        src: "./assets/images/Comedia/rickandmorty.webp",
        alt: 'Rick and Morty',
      },
      {
        src: "./assets/images/Comedia/scarymovie3.webp",
        alt: 'Scary Movie 3',
      },
      {
        src: "./assets/images/Comedia/ted2.webp",
        alt: 'Ted 2',
      }
    ]
  }

  anime: nextflixI ={
    title: 'anime',
    gallery: [
      {
        src: "./assets/images/Anime/ajin.jpg",
        alt: 'Ajin',
      },
      {
        src: "./assets/images/Anime/castilloambulante.webp",
        alt: 'El castillo ambulante',
      },
      {
        src: "./assets/images/Anime/chihiro.webp",
        alt: 'El viaje de Chihiro',
      },
      {
        src: "./assets/images/Anime/evangelion.webp",
        alt: 'Neon Genesis Evangelion',
      },
      {
        src: "./assets/images/Anime/gitsarise.webp",
        alt: 'Ghost in the sell Arise',
      },
      {
        src: "./assets/images/Anime/gundam.webp",
        alt: 'Mobile Suit Gundam II',
      },
      {
        src: "./assets/images/Anime/laputa.webp",
        alt: 'El castillo en el cielo',
      },
      {
        src: "./assets/images/Anime/mononoke.webp",
        alt: 'La princesa Mononoke',
      },
      {
        src: "./assets/images/Anime/ninokuni.jpg",
        alt: 'Ninokuni',
      },
      {
        src: "./assets/images/Anime/perfectblue.webp",
        alt: 'Perfect blue',
      },
      {
        src: "./assets/images/Anime/porcorosso.webp",
        alt: 'Porcorosso',
      }
    ]
  }

  accion: nextflixI ={
    title: 'acción',
    gallery: [
      {
        src: "./assets/images/Accion/ejercitomuertos.jpg",
        alt: 'El ejercito de los muertos',
      },
      {
        src: "./assets/images/Accion/elprotector.webp",
        alt: 'El protector',
      },
      {
        src: "./assets/images/Accion/equalizer2.webp",
        alt: 'Equalizer 2',
      },
      {
        src: "./assets/images/Accion/heat.webp",
        alt: 'Heat',
      },
      {
        src: "./assets/images/Accion/jackreacher.webp",
        alt: 'Jack Reacher',
      },
      {
        src: "./assets/images/Accion/johnwick2.webp",
        alt: 'John Wick 2',
      },
      {
        src: "./assets/images/Accion/killbill2.webp",
        alt: 'Kill Bill 2',
      },
      {
        src: "./assets/images/Accion/misionimposiblenacion.webp",
        alt: 'Mision imposible',
      },
      {
        src: "./assets/images/Accion/renacido.webp",
        alt: 'El renacido',
      },
      {
        src: "./assets/images/Accion/terminator2.webp",
        alt: 'Terminator 2',
      },
      {
        src: "./assets/images/Accion/worldwarz.webp",
        alt: 'Guerra mundial z',
      },
    ]
  }

  drama: nextflixI ={
    title: 'drama',
    gallery: [
      {
        src: '',
        alt: '',
      }
    ]
  }

  sciFi: nextflixI ={
    title: 'sci-fi',
    gallery: [
      {
        src: '',
        alt: '',
      }
    ]
  }

  terror: nextflixI ={
    title: 'terror',
    gallery: [
      {
        src: '',
        alt: '',
      }
    ]
  }

  topDiez: nextflixI ={
    title: 'top 10',
    gallery: [
      {
        src: '',
        alt: '',
      }
    ]
  }

}
