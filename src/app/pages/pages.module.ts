import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
