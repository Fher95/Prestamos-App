import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarPrestamoComponent } from './solicitar-prestamo/solicitar-prestamo.component';

const routes: Routes = [
  {
    path: 'solicitar-prestamo/:idCliente',
    component: SolicitarPrestamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
