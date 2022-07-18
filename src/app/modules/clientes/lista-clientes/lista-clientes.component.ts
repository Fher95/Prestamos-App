import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { ClienteModel } from '../models/cliente.model';
import { SolicitarPrestamoComponent } from '../../prestamos/solicitar-prestamo/solicitar-prestamo.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { PrestamoModel } from '../../prestamos/models/prestamo.model';

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
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public onRegistrarCliente() {
    this.router.navigate(['/clientes/registrar-cliente']);
  }

  public onSolicitarPrestamo(cliente: ClienteModel) {
    // this.router.navigate(['/prestamos/solicitar-prestamo/' + idCliente]);
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
      // let objPrestamo = this.formPrestamo.getRawValue();
      // this.activeModal.close({ prestamo: objPrestamo });
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

  private recargarListaCliente() {
    this.listaClientes$ = this.clienteService.getListaClientes();
  }

}
