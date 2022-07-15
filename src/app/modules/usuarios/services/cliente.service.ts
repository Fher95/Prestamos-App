import { Injectable } from "@angular/core";
import { ClienteModel } from '../models/cliente.model';

@Injectable()
export class ClienteService {

    private listaClientes: ClienteModel[] = [
        {nombre: 'Nombre Uno', cedula: 1234, correo: 'correo 1...' },
        {nombre: 'Nombre Dos', cedula: 5678, correo: 'correo 2...' },
        {nombre: 'Nombre Uno', cedula: 9012, correo: 'correo 3...' }
    ];

    crearCliente(objCliente: ClienteModel) {
        console.log('El cliente a guardar es: ', objCliente);
        this.listaClientes.push(objCliente);
    }

    getListaClientes(): ClienteModel[] {
        return this.listaClientes;
    }

}