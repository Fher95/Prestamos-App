import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [
  {
    path: 'registrar-cliente',
    component: CrearUsuarioComponent
  },
  {
    path: 'lista-clientes',
    component: ListaClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
