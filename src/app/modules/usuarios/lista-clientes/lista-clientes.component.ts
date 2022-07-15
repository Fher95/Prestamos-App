import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public listaClientes = this.clienteService.getListaClientes();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
