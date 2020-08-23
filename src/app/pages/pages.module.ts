import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { RegistradosComponent } from './registrados/registrados.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { CementeriosComponent } from './cementerios/cementerios.component';


@NgModule({
  declarations: [
    RegistroComponent,
    RegistradosComponent,
    HomeComponent,
    CementeriosComponent
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
