import { Component } from '@angular/core';

// a pokemon has a name, a type, and a size
interface Pokemon {
  name: string;
  type: string;
  size: number;
}

@Component({
  selector: 'app-test-me',
  templateUrl: './test-me.component.html',
  styleUrls: ['./test-me.component.scss']
})
export class TestMeComponent {
  // this component lists pokemon by type or size. It has a list of names
  // and buttons to sort by type or size

  // list of all pokemon
  pokemon: Pokemon[] = [
    { name: 'Pikachu', type: 'Electric', size: 0.4 },
    { name: 'Charmander', type: 'Fire', size: 0.6 },
    { name: 'Squirtle', type: 'Water', size: 0.5 },
    { name: 'Bulbasaur', type: 'Grass', size: 0.7 },
    { name: 'Jigglypuff', type: 'Fairy', size: 0.5 },
    { name: 'Psyduck', type: 'Water', size: 0.8 },
    { name: 'Machop', type: 'Fighting', size: 0.8 },
    { name: 'Mew', type: 'Psychic', size: 0.4 },
    { name: 'Snorlax', type: 'Normal', size: 2.1 }
  ];

  sortPokemon(attribute: string) {
    // sort pokemon by attribute
    if (attribute === 'type') {
      this.pokemon.sort((a, b) => a.type.localeCompare(b.type));
    } else if (attribute === 'size') {
      this.pokemon.sort((a, b) => a.size - b.size);
    }
  }


}
