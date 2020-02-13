import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }

  getCaracteriticas(id: number): Observable<any> {
    let url = 'https://pokeapi.co/api/v2/characteristic/'+ id;
    console.trace('');
    return this.http.get(url);

  }

  getAllPokemon(): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    console.trace('');
    return this.http.get(url);

  }

  getPokemonByNombre(nombre : string): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ nombre;
    //let url = 'http://localhost:8080/pokemon-rest/api/pokemon/?nombre='+ nombre;
    console.trace('get '+url);
    return this.http.get(url);

  }
  getHabilidad( nombreHabilidad : number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }
  


}
