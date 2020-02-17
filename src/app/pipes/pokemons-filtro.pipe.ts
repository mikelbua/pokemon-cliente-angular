import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../modelo/pokemon';

@Pipe({
  name: 'pokemonsFiltro'
})
export class PokemonsFiltroPipe implements PipeTransform {

  transform(pokemons: Array<Pokemon>, busqueda:string): any {

    console.debug(busqueda);

    let resultado = pokemons;

    
    //filtrp por nombre de Pokemon
    if(busqueda && busqueda !== ''){

      busqueda = busqueda.toLocaleLowerCase();
      resultado = resultado.filter((el) => {

      const encontrar = (el.nombre).toLocaleLowerCase();
      console.debug('encontrar : ' + encontrar);
      return encontrar.includes(busqueda);
    
      });//filter

    }//ifBusqueda



    return resultado;
  }//transform

}//class
