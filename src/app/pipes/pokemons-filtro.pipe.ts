import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonsFiltro'
})
export class PokemonsFiltroPipe implements PipeTransform {

  transform(pokemons: any, busqueda:string): any {

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
