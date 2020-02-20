import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './IPokemon.service';
import { Pokemon } from '../modelo/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }//constructor

  getAllPokemon(): Observable<any>{
    let url = 'http://localhost:8080/pokemon-rest/api/pokemon/';
    console.trace('Get :' + url);
    return this.http.get(url);
  }//getAllPokemon

  getPokemonByNombre(nombre : string): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ nombre;
    //let url = 'http://localhost:8080/pokemon-rest/api/pokemon/?nombre='+ nombre;
    console.trace('Get :'+ url);
    return this.http.get(url);
  }//getPokemonByNombre

  create(pokemon : Pokemon): Observable<any>{
    let url = "http://localhost:8080/pokemon-rest/api/pokemon/";
    console.trace('POST : ' + url);
    return this.http.post(url,pokemon);
  }//create

  updateById(pokemon : Pokemon): Observable<any>{
    let url = 'http://localhost:8080/pokemon-rest/api/pokemon/'+ pokemon.id;
    console.trace('Update : ' + url);
    return this.http.put(url,pokemon);
  }//deleteById

  deleteById(id : number): Observable<any>{
    let url = 'http://localhost:8080/pokemon-rest/api/pokemon/'+ id;
    console.trace('Delete : ' + url);
    return this.http.delete(url);
  }//deleteById

}//class
