import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrestamosService } from './services/prestamos.service';
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';


@NgModule({
  providers: [PrestamosService],
  declarations: [
    SolicitarPrestamoComponent,
    ListaPrestamosComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PrestamosModule { }
