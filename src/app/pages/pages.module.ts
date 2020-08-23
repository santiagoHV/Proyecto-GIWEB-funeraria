import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { RegistradosComponent } from './registrados/registrados.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    RegistroComponent,
    RegistradosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesModule { }
