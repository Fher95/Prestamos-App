import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrestamosService } from './services/prestamos.service';
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';
import { PagarPrestamoComponent } from './pagar-prestamo/pagar-prestamo.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  providers: [PrestamosService],
  declarations: [
    SolicitarPrestamoComponent,
    ListaPrestamosComponent,
    PagarPrestamoComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule
  ]
})
export class PrestamosModule { }
