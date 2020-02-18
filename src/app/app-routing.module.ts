import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { InicionComponent } from './paginas/inicion/inicion.component';
import { BackofficeComponent } from './paginas/backoffice/backoffice.component';


const routes: Routes = [
  { path: '', component: InicionComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'backoffice', component: BackofficeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
