import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseFormComponent } from './adresse-form/adresse-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

 { path:'', component: AdresseListComponent},
 { path:'new', component: AdresseFormComponent},
 { path:':id/edit', component: AdresseFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdressesRoutingModule { }
