import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';


@NgModule({
  providers: [ClienteService],
  declarations: [
    CrearUsuarioComponent,
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CrearUsuarioComponent, ListaClientesComponent]
})
export class ClientesModule { }
