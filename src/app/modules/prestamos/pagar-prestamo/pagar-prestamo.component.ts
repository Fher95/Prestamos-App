import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PrestamoModel } from '../models/prestamo.model';
import { PrestamosService } from '../services/prestamos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-pagar-prestamo',
  templateUrl: './pagar-prestamo.component.html',
  styleUrls: ['./pagar-prestamo.component.css']
})
export class PagarPrestamoComponent implements OnInit {

  @Input() infoPrestamo: PrestamoModel | undefined;

  public formPago = this.crearFormulario();

  constructor(
    private activeModal: NgbActiveModal,
    private prestamosService: PrestamosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  private crearFormulario() {
    return this.fb.group({
      valorPago: [null, [Validators.min(0), Validators.max(this.infoPrestamo?.monto ? this.infoPrestamo?.monto : 0)]]
    });
  }

  public onClose(guardado?: boolean) {
    this.activeModal.close({
      guardado: guardado
    });
  }

  public onPagar() {
    const { valorPago } = this.formPago.getRawValue();
    if (this.infoPrestamo && valorPago < this.infoPrestamo.monto) {
      const nuevoPago = { ...this.infoPrestamo, pagado: this.infoPrestamo.pagado + valorPago }
      this.prestamosService.actualizarPrestamo(nuevoPago)
      .pipe(tap({
        next: () => {
          console.log('Pago realizado exitosamente');
          this.onClose(true);
        },
        error: () => {
          console.log('Error al realizar el pago');
          this.onClose();
        }
      }))
      .subscribe();
    }
  }

}
