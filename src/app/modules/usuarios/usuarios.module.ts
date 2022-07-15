import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
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
    UsuariosRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [CrearUsuarioComponent, ListaClientesComponent]
})
export class UsuariosModule { }
