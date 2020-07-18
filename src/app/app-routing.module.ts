import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{ path: 'adresses',loadChildren: './pages/adresses/adresses.module#AdressesModule'
  
  {
    path : 'adresses', 
    loadChildren: () => import('./pages/adresses/adresses.module').then(m => m.AdressesModule)  
      
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
