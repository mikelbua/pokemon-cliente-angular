import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './IPokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }


  getAllPokemon(): Observable<any>{
    let url = 'http://localhost:8080/pokemon-rest/api/pokemon/';
    console.trace('get :' + url);
    return this.http.get(url);

  }//getAllPokemon

  getPokemonByNombre(nombre : string): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ nombre;
    //let url = 'http://localhost:8080/pokemon-rest/api/pokemon/?nombre='+ nombre;
    console.trace('get :'+ url);
    return this.http.get(url);

  }//getPokemonByNombre
  


}//class
