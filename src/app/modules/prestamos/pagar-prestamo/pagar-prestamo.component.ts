import { tap } from 'rxjs/operators';
import { PrestamoModel } from '../models/prestamo.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertTypes } from '../../shared/models/alerts.model';
import { PrestamosService } from '../services/prestamos.service';
import { SaldoBancoService } from 'src/app/modules/shared/services/saldo-banco.service';

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
    private fb: FormBuilder,
    private saldoService: SaldoBancoService
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
    if (this.infoPrestamo) {
      if (valorPago > (this.infoPrestamo.monto - this.infoPrestamo.pagado)) {
        this.saldoService.notificarOperacion({ mensaje: 'La cantidad excede el saldo por pagar.', tipo: AlertTypes.WARNING })
        this.onClose(true);
        return;
      }
      const nuevoPago = { ...this.infoPrestamo, pagado: this.infoPrestamo.pagado + valorPago }
      this.prestamosService.actualizarPrestamo(nuevoPago)
        .pipe(tap({
          next: () => {
            this.saldoService.setSaldoActual(this.saldoService.getSaldoActual() + valorPago);
            this.saldoService.notificarOperacion({ mensaje: 'Pago realizado exitosamente.', tipo: AlertTypes.SUCCESS });
            this.onClose(true);
          },
          error: () => {
            this.saldoService.notificarOperacion({ mensaje: 'Ha ocurrido un error al realizar el pago.', tipo: AlertTypes.DANGER });
            this.onClose();
          }
        }))
        .subscribe();
    }
  }

  public getPendientePorPagar() {
    if (this.infoPrestamo?.monto) {
      if (this.infoPrestamo?.pagado === 0) {
        return this.infoPrestamo?.monto;
      }
      return this.infoPrestamo?.monto - this.infoPrestamo?.pagado
    }
    return 0;
  }

}
