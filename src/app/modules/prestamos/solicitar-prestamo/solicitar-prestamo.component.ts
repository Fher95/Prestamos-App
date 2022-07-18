import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteModel } from '../../clientes/models/cliente.model';

@Component({
  selector: 'app-solicitar-prestamo',
  templateUrl: './solicitar-prestamo.component.html',
  styleUrls: ['./solicitar-prestamo.component.css']
})
export class SolicitarPrestamoComponent implements OnInit {

  @Input() infoCliente: ClienteModel | undefined;

  public formPrestamo = this.fb.group({
    monto: [null],
    fechaPago: [null],
    idCliente: [null],
    nombreCliente: [null],
    cedulaCliente: [null],
    pagado: [0]
  });

  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.cargarInfoCliente();
  }

  public nombreCliente(): string {
    return this.formPrestamo.get('nombreCliente')?.value;
  }

  public cedulaCliente(): string {
    return this.formPrestamo.get('cedulaCliente')?.value;
  }

  public cargarInfoCliente() {
    this.formPrestamo.setValue({
      ...this.formPrestamo.value,
      idCliente: this.infoCliente?.id,
      nombreCliente: this.infoCliente?.nombre,
      cedulaCliente: this.infoCliente?.cedula
    })
  }

  public onSolicitar() {
    if (this.formPrestamo.get('idCliente')?.value) {
      let objPrestamo = this.formPrestamo.getRawValue();
      this.activeModal.close({ prestamo: objPrestamo });
    }
  }

  public onCancelar() {
    this.activeModal.close({ prestamo: null });
  }
}
