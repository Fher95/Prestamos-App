import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SolicitarPrestamoComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrestamosModule { }
