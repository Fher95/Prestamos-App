import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { ClienteModel } from '../models/cliente.model';
import { SolicitarPrestamoComponent } from '../../prestamos/solicitar-prestamo/solicitar-prestamo.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { PrestamoModel } from '../../prestamos/models/prestamo.model';
import { SaldoBancoService } from '../../shared/services/saldo-banco.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public listaClientes$ = this.clienteService.getListaClientes();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private modalService: NgbModal,
    private saldoService: SaldoBancoService
  ) { }

  ngOnInit(): void {
  }

  public onRegistrarCliente() {
    this.router.navigate(['/clientes/registrar-cliente']);
  }

  public onSolicitarPrestamo(cliente: ClienteModel) {
    const modalRef = this.modalService.open(SolicitarPrestamoComponent);
    modalRef.componentInstance.infoCliente = cliente;
    modalRef.closed
      .pipe(tap(
        res => res.prestamo ? this.solicitarPrestamo(res.prestamo) : null
      ))
      .subscribe();
  }

  public solicitarPrestamo(prestamo: PrestamoModel) {
    debugger
    if (prestamo.idCliente) {
      this.saldoService.setSaldoActual(this.saldoService.getSaldoActual() - prestamo.monto);
      this.clienteService.registrarPrestamo(prestamo)
        .pipe(tap(
          {
            next: (prestamo) => { console.log('Prestamo realizado correctamente: ', JSON.stringify(prestamo)); },
            error: () => console.log('Error al realizar el prestamo')
          }
        ))
        .subscribe();
    }
  }

}
