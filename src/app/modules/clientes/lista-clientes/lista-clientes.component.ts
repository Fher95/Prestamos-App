import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public listaClientes$ = this.clienteService.getListaClientes();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public onRegistrarCliente() {
    this.router.navigate(['/clientes/registrar-cliente']);
  }

}
