import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modelo/pokemon';
import { Habilidad } from 'src/app/modelo/habilidad';
import { PokemonService } from 'src/app/services/pokemon.service';

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

constructor(private PokemonService : PokemonService) { 
    
  }//contructor

  ngOnInit() {
    console.trace('PokemonComponent init');

    this.getPokemos();
  }//init


  //metodo que recoge todos los Pokemons y los mete e el Array pokemons
  getPokemos(){
    //llamadas a los sevicios.
    //cuanodo llamamos a un observable tenemos tres posibles metodos 
    //next,error y complete, SOLO UNO es OBLIGATORIO (next).
    //a un observble nos tenemos que subscribir.
    this.PokemonService.getAllPokemon().subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Json a array de Pokemons
        this.pokemons  = data;
        this.pokemon = this.pokemons[0];
      },
      error => {//metodo error de Observable (no obligatorio).
        console.warn('peticion ERRONEA data %o', error);
      },
      () => {//metodo complete de Observable (no obligatorio).
        console.trace('esto se hace siempre');
      }
    );

  }//getPokemons

  detallePokemon(p:any){
    this.pokemon = p;
  }//detallePokemon

}
