import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.scss',
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
