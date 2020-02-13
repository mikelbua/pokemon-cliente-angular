import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modelo/pokemon';
import { Habilidad } from 'src/app/modelo/habilidad';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})


export class PokemonComponent implements OnInit {

busqueda : string;
pokemons : Array<Pokemon>
pokemon : Pokemon;
habilidades:Habilidad;

constructor() { 


this.pokemons = [
        {
            "id": 1,
            "nombre": "pikachu",
            "foto" : "https://i.pinimg.com/originals/2f/a6/fa/2fa6fa2b399f3d85d8f403d4ac5ec666.png",
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
            "foto" : "https://3.bp.blogspot.com/_dC-5pcNY3lo/S74GES-NvtI/AAAAAAAAACA/t2PJSgB4Srk/s1600/Lucario+Pok%C3%A8mon+Platino.png",
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
            "foto" : "https://www.goodvinilos.com/4608-home_default/pokemon-charmander.jpg",
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
            "foto" : "https://i.pinimg.com/originals/be/3f/41/be3f41f9e1acdd2688ef9d3e1bf6a559.jpg",
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
      this.pokemon = this.pokemons[0];
  }//init


  detallePokemon(p:any){
    this.pokemon = p;
  }//detallePokemon

}
