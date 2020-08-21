import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistradosComponent } from './registrados/registrados.component';


@NgModule({
  declarations: [HomeComponent, RegistroComponent, RegistradosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
