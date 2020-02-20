import { Injectable } from '@angular/core';
import { IHabilidad } from './IHabilidad.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService implements IHabilidad{


  constructor(private http: HttpClient) {
    console.trace('HabilidadService constructor');

    
  }//constructor


  getAllHabilidad(): Observable<any> {
    let url = 'http://localhost:8080/pokemon-rest/api/habilidad/';
    console.trace('Get :' + url);
    return this.http.get(url);
  }

  
}//class
