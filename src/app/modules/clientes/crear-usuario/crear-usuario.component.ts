import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ClienteModel } from '../models/cliente.model';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public formCliente: FormGroup = this.crearFormulario();

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private router: Router) { }

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
        next: () => {console.log('Agregado exitosamente.'); this.onCancelar();},
        error: () => console.log('Ha ocurrido un error al registrar el cliente.')
      })
      )
    .subscribe();
  }

  public onCancelar() {
    this.router.navigate(['clientes/lista-clientes']);
  }

}