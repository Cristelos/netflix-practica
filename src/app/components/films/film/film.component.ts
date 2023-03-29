import { ImageI } from './../../../models/netflix.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() film!: ImageI;
}
