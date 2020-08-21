import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistradosComponent } from './registrados/registrados.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'data', component: RegistradosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }