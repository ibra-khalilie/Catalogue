import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ChemiseComponent} from "./chemise/chemise.component";

const routes: Routes = [
  {
    path:"acceuil", component:AccueilComponent},
  {
    path:"chemise",component:ChemiseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
