import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clientes/lista-clientes'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./modules/prestamos/prestamos.module').then(m => m.PrestamosModule)
  },
  // {
  //   path: 'episodes',
  //   loadChildren: () => import('./modules/episodes/episodes.module').then(m => m.EpisodesModule)
  // }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
