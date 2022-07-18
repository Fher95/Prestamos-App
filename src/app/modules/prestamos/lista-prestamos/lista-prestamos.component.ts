import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrestamosService } from '../services/prestamos.service';
import { PagarPrestamoComponent } from '../pagar-prestamo/pagar-prestamo.component';
import { PrestamoModel } from '../models/prestamo.model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.component.html',
  styleUrls: ['./lista-prestamos.component.css']
})
export class ListaPrestamosComponent implements OnInit {

  listaPrestamos$ = this.prestamosService.getListaPrestamos();

  constructor(private prestamosService: PrestamosService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onAbrirModalPago(prestamo: PrestamoModel) {
    const modalRef = this.modalService.open(PagarPrestamoComponent);
    modalRef.componentInstance.infoPrestamo = prestamo;
    modalRef.closed
    .pipe(tap(
      res => res.guardado ? this.recargarListaPrestamos() : null
    ))
    .subscribe();
  }

  private recargarListaPrestamos() {
    this.listaPrestamos$ = this.prestamosService.getListaPrestamos();
  }

}
