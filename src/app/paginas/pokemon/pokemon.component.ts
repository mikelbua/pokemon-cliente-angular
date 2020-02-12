import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modelo/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})


export class PokemonComponent implements OnInit {

pokemons : Array<Pokemon>

constructor() { 

      this.pokemons = [
        {
            "id": 1,
            "nombre": "pikachu",
            "habilidades": [
                {
                    "id": 4,
                    "nombre": "pararayos"
                },
                {
                    "id": 5,
                    "nombre": "electricidad estatica"
                }
            ]
        },
        {
            "id": 2,
            "nombre": "lucario",
            "habilidades": [
                {
                    "id": 1,
                    "nombre": "impasible"
                },
                {
                    "id": 2,
                    "nombre": "foco interno"
                },
                {
                    "id": 3,
                    "nombre": "justiciero"
                }
            ]
        },
        {
            "id": 3,
            "nombre": "charmander",
            "habilidades": [
                {
                    "id": 1,
                    "nombre": "impasible"
                },
                {
                    "id": 6,
                    "nombre": "ascuas"
                }
            ]
        },
        {
            "id": 4,
            "nombre": "bulbasaur",
            "habilidades": [
                {
                    "id": 1,
                    "nombre": "impasible"
                },
                {
                    "id": 7,
                    "nombre": "hedor"
                }
            ]
        }
    ];

  }//contructor

  ngOnInit() {
  }//init

}
