import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';

const routes: Routes = [
  {
    path: 'solicitar-prestamo/:idCliente',
    component: SolicitarPrestamoComponent
  },
  {
    path: 'lista-prestamos',
    component: ListaPrestamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
