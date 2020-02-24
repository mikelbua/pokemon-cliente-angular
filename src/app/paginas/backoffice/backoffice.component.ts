import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modelo/pokemon';
import { Habilidad } from 'src/app/modelo/habilidad';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  busqueda : string;
  pokemons : Array<Pokemon>
  pokemon : Pokemon;
  arrayPrueba : Array<any>;
  
  nombrePokemon : string;
  todasHabilidades : Array<Habilidad>
  habilidadesCheck : Array<any>

  formulario : FormGroup;
  formHabilidades: FormArray;

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
                                          habiliades : this.builder.array([])
                                        });
    //metemos las habilidades seleccionadas (habilidades) el un FormArray (formHabilidades) declarado arriba
    this.formHabilidades = this.formulario.get('habiliades') as FormArray;
  }//construirform

  private crearFormGroupHabilidad(): FormGroup {
    return this.builder.group({
              id: new FormControl(0),
              nombre: new FormControl('')
            });
  }//crearFormGroupHabilidad

  checkCambiado( h: any ) {

    
    console.debug('checkCambiado %o', h);

    if(h.checked) {
      const habilidad = this.crearFormGroupHabilidad();
      habilidad.get('id').setValue( h.id );
      habilidad.get('nombre').setValue( h.nombre );
            
      this.formHabilidades.push(habilidad);

    } else {
      console.trace('Aqui borrara la habilidad del array al DESchechear')
      //esta linea borrara la habilidad de arrray formHabilidades cuando DEScheckeamos
      this.formHabilidades.removeAt(this.formHabilidades.value.findIndex(el => el.id === h.id));
    }
  }// checkCambiado

  limpiarForm(){
      let controlNombre = this.formulario.get('nombre');
      controlNombre.setValue('');
      
      let controlId = this.formulario.get('id');
      controlId.setValue(0);

      this.formHabilidades.clear();
      this.habilidadesCheck.forEach(element => {
        element.checked = false;
      });
      
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
      poNuevo.habilidades = this.formHabilidades.value;
      
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
          this.todasHabilidades  = data;
          this.habilidadesCheck = this.todasHabilidades.map(el=> {
            return {
              id: el.id,
              nombre: el.nombre,
              checked : false
            }
          });
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

      this.habilidadesCheck.forEach(element => {
        element.checked = this.pokemon.habilidades.some(h => h.id === element.id)
      });

     
      this.formHabilidades.clear();

      this.pokemon.habilidades.forEach(el =>{
      const habilidad = this.crearFormGroupHabilidad();
      habilidad.get('id').setValue( el.id );
      habilidad.get('nombre').setValue( el.nombre );
            
      this.formHabilidades.push(habilidad);

        

      });


    };//detallePokemon
    
  

}//class