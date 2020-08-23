import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistradosComponent } from './registrados/registrados.component';
import { CementerioModel } from '../models/cementerio.model';
import { CementeriosComponent } from './cementerios/cementerios.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'registro/:id', component: RegistroComponent
  },
  {
    path: 'data', component: RegistradosComponent
  },
  {
    path: 'cementerios', component: CementeriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
