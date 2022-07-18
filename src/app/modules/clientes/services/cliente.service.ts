import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrestamoModel } from "../../prestamos/models/prestamo.model";
import { ClienteModel } from '../models/cliente.model';

@Injectable()
export class ClienteService {

    constructor(private httpClient: HttpClient) { }

    crearCliente(objCliente: ClienteModel): Observable<ClienteModel> {
        return this.httpClient.post<ClienteModel>('http://localhost:3000/clientes', objCliente);
        // console.log('El cliente a guardar es: ', objCliente);
        // this.listaClientes.push(objCliente);
    }

    getListaClientes(): Observable<ClienteModel[]> {
        return this.httpClient.get<ClienteModel[]>('http://localhost:3000/clientes');
        // return this.listaClientes;
    }

    registrarPrestamo(objPrestamo: PrestamoModel): Observable<PrestamoModel> {
        return this.httpClient.post<PrestamoModel>('http://localhost:3000/prestamos', objPrestamo);
    }

}