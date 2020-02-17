import { Observable } from 'rxjs';


export interface IPokemonService {


    /**
     * recuperamos los daton en json de un pokemon por su nombre. 
     * @param nombre : string  ->  nombre del Pokemon.
     */

    getPokemonByNombre(nombre : string):Observable<any>;

    getAllPokemon(): Observable<any>;
    
      


}//class
