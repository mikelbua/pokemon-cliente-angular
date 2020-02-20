import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modelo/pokemon';
import { Habilidad } from 'src/app/modelo/habilidad';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  busqueda : string;
  pokemons : Array<Pokemon>
  pokemon : Pokemon;
  habilidades:Habilidad;
  nombrePokemon : string;
  todaHabilidades : Array<Habilidad>

  formulario : FormGroup;

  constructor(private PokemonService : PokemonService,
              private HabilidadService : HabilidadService,
              private router : Router , 
              private builder : FormBuilder,) { 

    console.trace('BackofficeComponent constructor');

    //Contruir formulario
    this.construirform();
      
  }//contructor

  ngOnInit() {
    console.trace('BackofficeComponent init');

    this.getPokemos();
    this.getHabilidades();
  }//init

  private construirform(){
    this.formulario = this.builder.group(
                    {
                      //Definir lo Formcontrols == inputs [value,validaciones]
                      id: [0],
                      nombre : ['',[Validators.required , Validators.minLength(2) , Validators.maxLength(15)]],
                      
                    });
  }//construirform

  limpiarForm(){
      let controlNombre = this.formulario.get('nombre');
      controlNombre.setValue('');
      
      let controlId = this.formulario.get('id');
      controlId.setValue(0);
      
  }//limpiarForm

  enviar(values : any)
    { 
      //debugger;
      console.trace('Soy el metodo enviar del BackofficeComponent');
      console.trace('Enviar formulario %o', values);

      
      let NombrePokemon = values.nombre;
      let idPokemon =  values.id;
      let poNuevo = new Pokemon();

      poNuevo.id = idPokemon;
      poNuevo.nombre = NombrePokemon;

      if(idPokemon === 0 )
      {
        console.trace('Soy el metodo Crear Pokemon');
        
        this.PokemonService.create(poNuevo).subscribe(
          data => {
            console.debug('peticion correcta data %o', data);
            // mapear de Json a array de Pokemons
            this.pokemon  = data;
            this.getPokemos();
          },
          error => {//metodo error de Observable (no obligatorio).
            console.warn('peticion ERRONEA data %o', error);
          },
          () => {//metodo complete de Observable (no obligatorio).
            console.trace('esto se hace siempre');
          }
        );
      }
      else{
          console.trace('Soy el metodo update Pokemon');
        
          this.PokemonService.updateById(poNuevo).subscribe(
          data => {
            console.debug('peticion correcta data %o', data);
            // mapear de Json a array de Pokemons
            this.pokemon  = data;
            this.getPokemos();
          },
          error => {//metodo error de Observable (no obligatorio).
            console.warn('peticion ERRONEA data %o', error);
          },
          () => {//metodo complete de Observable (no obligatorio).
            console.trace('esto se hace siempre');
          }
        );
      }

    }//enviar

    eliminarPokemon(event: Event , p: any){
      console.trace('Soy el metodo eliminar Pokemon');
      event.stopPropagation();
      //llamadas a los sevicios.
      //cuanodo llamamos a un observable tenemos tres posibles metodos 
      //next,error y complete, SOLO UNO es OBLIGATORIO (next).
      //a un observble nos tenemos que subscribir.
      this.PokemonService.deleteById(p.id).subscribe(
        data => {
          console.debug('peticion correcta data %o', data);
          // mapear de Json a array de Pokemons
          this.pokemon  = data;
          this.getPokemos();
        },
        error => {//metodo error de Observable (no obligatorio).
          console.warn('peticion ERRONEA data %o', error);
        },
        () => {//metodo complete de Observable (no obligatorio).
          console.trace('esto se hace siempre');
        }
      );
      this.getPokemos();
      this.limpiarForm();
    }//eliminarPokemon

    /**
     * metodo que recoge todos los Pokemons y los mete e el Array pokemons
     * */
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

    getHabilidades(){
      //llamadas a los sevicios.
      //cuanodo llamamos a un observable tenemos tres posibles metodos 
      //next,error y complete, SOLO UNO es OBLIGATORIO (next).
      //a un observble nos tenemos que subscribir.
      this.HabilidadService.getAllHabilidad().subscribe(
        data => {
          console.debug('peticion correcta data %o', data);
          // mapear de Json a array de Pokemons
          this.todaHabilidades  = data;
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

      let controlNombre = this.formulario.get('nombre');
      controlNombre.setValue(this.pokemon.nombre);

      let controlId = this.formulario.get('id');
      controlId.setValue(this.pokemon.id);

    };//detallePokemon



}//class
