import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { InicionComponent } from './paginas/inicion/inicion.component';
import { PokemonsFiltroPipe } from './pipes/pokemons-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonComponent,
    InicionComponent,
    PokemonsFiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//modulo para llamadas por HTTP
    FormsModule,//banana in a box
    ReactiveFormsModule//para formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
