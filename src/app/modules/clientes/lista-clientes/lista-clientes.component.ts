import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteModel } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { AlertTypes } from '../../shared/models/alerts.model';
import { PrestamoModel } from '../../prestamos/models/prestamo.model';
import { SaldoBancoService } from 'src/app/modules/shared/services/saldo-banco.service';
import { SolicitarPrestamoComponent } from '../../prestamos/solicitar-prestamo/solicitar-prestamo.component';

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
    if (prestamo.idCliente) {
      if (!this.saldoService.aprobarPrestamo()) {
        this.saldoService.notificarOperacion({mensaje:"Lo sentimos. El prestamo ha sido rechazado.", tipo: AlertTypes.DANGER});
        return;
      }
      this.saldoService.setSaldoActual(this.saldoService.getSaldoActual() - prestamo.monto);
      this.clienteService.registrarPrestamo(prestamo)
        .pipe(tap(
          {
            next: () => { this.saldoService.notificarOperacion({mensaje: "El prestamo ha sido aprobado.", tipo: AlertTypes.SUCCESS}); },
            error: () => this.saldoService.notificarOperacion({mensaje: "Ha ocurrido un error.", tipo: AlertTypes.DANGER})
          }
        ))
        .subscribe();
    }
  }

}
