import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrestamosService } from './services/prestamos.service';


@NgModule({
  providers: [PrestamosService],
  declarations: [
    SolicitarPrestamoComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PrestamosModule { }
