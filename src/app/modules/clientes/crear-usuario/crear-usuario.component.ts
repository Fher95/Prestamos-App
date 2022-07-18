import { tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../models/cliente.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { AlertTypes } from '../../shared/models/alerts.model';
import { SaldoBancoService } from 'src/app/modules/shared/services/saldo-banco.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public formCliente: FormGroup = this.crearFormulario();

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private router: Router, private saldoService: SaldoBancoService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  private crearFormulario() {
    return this.fb.group({
      nombre: [null],
      cedula: [null],
      correo: [null]
    });
  }

  public onRegistrar() {
    const infoCliente: ClienteModel = this.formCliente.getRawValue();
    this.clienteService.crearCliente(infoCliente)
    .pipe(
      tap({
        next: () => this.onRegistroExitoso(),
        error: () => this.onErrorRegistro()
      })
      )
    .subscribe();
  }

  onRegistroExitoso() {
    this.saldoService.notificarOperacion({mensaje:'Cliente registrado exitosamente.', tipo: AlertTypes.SUCCESS});
    this.onCancelar();
  }

  onErrorRegistro() {
    this.saldoService.notificarOperacion({mensaje:'Ha ocurrido un error en el registro.', tipo: AlertTypes.DANGER});
  }

  public onCancelar() {
    this.router.navigate(['clientes/lista-clientes']);
  }

}