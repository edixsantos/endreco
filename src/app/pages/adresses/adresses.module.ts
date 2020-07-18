import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressesRoutingModule } from './adresses-routing.module';
import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseFormComponent } from './adresse-form/adresse-form.component';


@NgModule({
  declarations: [AdresseListComponent, AdresseFormComponent],
  imports: [
    CommonModule,
    AdressesRoutingModule
  ]
})
export class AdressesModule { }
