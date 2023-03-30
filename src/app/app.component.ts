import { nextflixI, ImageI } from './models/netflix.interfaces';
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
        src: "./assets/images/Drama/1917.webp",
        alt: '1917',
      },
      {
        src: "./assets/images/Drama/arrival.webp",
        alt: 'La llegada',
      },
      {
        src: "./assets/images/Drama/clublucha.webp",
        alt: 'El club de la lucha',
      },
      {
        src: "./assets/images/Drama/corazones.webp",
        alt: 'Corazones de acero',
      },
      {
        src: "./assets/images/Drama/culpable.jpg",
        alt: 'Culpable',
      },
      {
        src: "./assets/images/Drama/millaverde.webp",
        alt: 'La milla verde',
      },
      {
        src: "./assets/images/Drama/naufrago.webp",
        alt: 'Naufrago',
      },
      {
        src: "./assets/images/Drama/noespais.webp",
        alt: 'No es pais para viejos',
      },
      {
        src: "./assets/images/Drama/salvaralsoldado.webp",
        alt: 'Salvar al soldado Ryan',
      },
      {
        src: "./assets/images/Drama/scarface.webp",
        alt: 'Scarface',
      },
      {
        src: "./assets/images/Drama/schindler.webp",
        alt: 'La lista de Schindler',
      },
      {
        src: "./assets/images/Drama/sombradiablo.webp",
        alt: 'La sombra del diablo',
      },
      {
        src: "./assets/images/Drama/unicosuperviviente.webp",
        alt: 'El único superviviente',
      },
    ]
  }

  sciFi: nextflixI ={
    title: 'sci-fi',
    gallery: [
      {
        src: "./assets/images/Sci-fi/6dia.webp",
        alt: 'El 6º día',
      },
      {
        src: "./assets/images/Sci-fi/12monos.webp",
        alt: '12 monos',
      },
      {
        src: "./assets/images/Sci-fi/afterearth.webp",
        alt: 'After Earth',
      },
      {
        src: "./assets/images/Sci-fi/colverparadox.jpg",
        alt: 'The Colverfield paradox',
      },
      {
        src: "./assets/images/Sci-fi/core.webp",
        alt: 'El núcleo',
      },
      {
        src: "./assets/images/Sci-fi/deepimpact.webp",
        alt: 'Deep impact',
      },
      {
        src: "./assets/images/Sci-fi/doom.webp",
        alt: 'Doom',
      },
      {
        src: "./assets/images/Sci-fi/gits.webp",
        alt: 'Ghosth in the shell',
      },
      {
        src: "./assets/images/Sci-fi/jumper.webp",
        alt: 'Jumper',
      },
      {
        src: "./assets/images/Sci-fi/passengers.webp",
        alt: 'Passengers',
      },
      {
        src: "./assets/images/Sci-fi/startrek.webp",
        alt: 'Star trek',
      },
      {
        src: "./assets/images/Sci-fi/transformers.webp",
        alt: 'Transformers',
      },
      {
        src: "./assets/images/Sci-fi/watchmen.webp",
        alt: 'Watchmen',
      }
    ]
  }

  terror: nextflixI ={
    title: 'terror',
    gallery: [
      {
        src: "./assets/images/Terror/apostol.jpg",
        alt: 'El apostol',
      },
      {
        src: "./assets/images/Terror/calleterror.jpg",
        alt: 'La calle del terror',
      },
      {
        src: "./assets/images/Terror/infiernoagua.webp",
        alt: 'Infierno en el agua',
      },
      {
        src: "./assets/images/Terror/insidious2.webp",
        alt: 'Insidius 2',
      },
      {
        src: "./assets/images/Terror/life.webp",
        alt: 'Life',
      },
      {
        src: "./assets/images/Terror/malasana.webp",
        alt: 'Malasaña 32',
      },
      {
        src: "./assets/images/Terror/multiple.webp",
        alt: 'Múltiple',
      },
      {
        src: "./assets/images/Terror/reflejos.webp",
        alt: 'Reflejos',
      }
    ]
  }

  topDiez: nextflixI ={
    title: 'Los 10 más populares hoy',
    gallery: [
      {
        src: "./assets/images/Top10/1.png",
        alt: 'Número uno',
      },
      {
        src: "./assets/images/Top10/1-papel.webp",
        alt: 'La casa de papel',
      },
      {
        src: "./assets/images/Top10/2.png",
        alt: 'Número dos',
      },
      {
        src: "./assets/images/Top10/2-reina.webp",
        alt: 'La reina del Flow',
      },

      {
        src: "./assets/images/Top10/3.png",
        alt: 'Número tres',
      },
      {
        src: "./assets/images/Top10/3-titanes.webp",
        alt: 'Titanes',
      },

      {
        src: "./assets/images/Top10/4.png",
        alt: 'Número cuatro',
      },
      {
        src: "./assets/images/Top10/4-lostinspace.webp",
        alt: 'Lost in space',
      },

      {
        src: "./assets/images/Top10/5.png",
        alt: 'Número cinco',
      },
      {
        src: "./assets/images/Top10/5-dondecaben.webp",
        alt: 'Donde caben dos',
      },

      {
        src: "./assets/images/Top10/6.png",
        alt: 'Número seis',
      },
      {
        src: "./assets/images/Top10/6-aquinohay.webp",
        alt: 'Aquí no hay quien viva',
      },

      {
        src: "./assets/images/Top10/7.png",
        alt: 'Número siete',
      },
      {
        src: "./assets/images/Top10/7-blacklist.webp",
        alt: 'The black list',
      },
      {
        src: "./assets/images/Top10/8.png",
        alt: 'Número ocho',
      },
      {
        src: "./assets/images/Top10/8-ricos.webp",
        alt: 'Ricos y mimados',
      },
      {
        src: "./assets/images/Top10/9.png",
        alt: 'Número nueve',
      },
      {
        src: "./assets/images/Top10/9-poder.webp",
        alt: 'El poder del perro',
      },
      {
        src: "./assets/images/Top10/10.png",
        alt: 'Número diez',
      },
      {
        src: "./assets/images/Top10/10-gooddoctor.webp",
        alt: 'The good doctor',
      }
    ]
  }

}
