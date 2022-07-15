import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ClienteModel } from '../models/cliente.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public formCliente: FormGroup = this.crearFormulario();

  constructor(private fb: FormBuilder, private clienteService: ClienteService) { }

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
    this.clienteService.crearCliente(infoCliente);
  }

}