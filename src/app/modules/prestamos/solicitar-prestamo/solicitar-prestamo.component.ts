import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestamosService } from '../services/prestamos.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-solicitar-prestamo',
  templateUrl: './solicitar-prestamo.component.html',
  styleUrls: ['./solicitar-prestamo.component.css']
})
export class SolicitarPrestamoComponent implements OnInit {

  // public infoCliente: ClienteModel | undefined;

  public formPrestamo = this.fb.group({
    monto: [null],
    fechaPago: [null],
    idCliente: [null],
    nombreCliente: [null],
    cedulaCliente: [null]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private prestamoService: PrestamosService
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
    const idCliente = this.activatedRoute.snapshot.params.idCliente;
    if (idCliente) {
      this.prestamoService.getInfoCliente(idCliente)
        .pipe(tap((cliente) => {
          this.formPrestamo.setValue({
            ...this.formPrestamo.value,
            idCliente: cliente.id,
            nombreCliente: cliente.nombre,
            cedulaCliente: cliente.cedula
          })
        }))
        .subscribe();
    }
  }

  public onSolicitar() {
    if (this.formPrestamo.get('idCliente')?.value) {
      let objPrestamo = this.formPrestamo.getRawValue();
      this.prestamoService.registrarPrestamo(objPrestamo)
        .pipe(tap(
          {
            next: (prestamo) => { console.log('Prestamo realizado correctamente: ', JSON.stringify(prestamo)) },
            error: () => console.log('Error al realizar el prestamo')
          }
        ))
        .subscribe();
    }
  }

  public onCancelar() {
    this.router.navigate(['clientes/lista-clientes']);
  }
}
