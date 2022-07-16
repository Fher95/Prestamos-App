import { Injectable } from "@angular/core";
import { ClienteModel } from '../../clientes/models/cliente.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PrestamoModel } from '../models/prestamo.model';

@Injectable()
export class PrestamosService {

    constructor(private httpClient: HttpClient) { }

    getInfoCliente(idCliente: number): Observable<ClienteModel> {
        return this.httpClient.get<ClienteModel>('http://localhost:3000/clientes/' + idCliente);
    }

    registrarPrestamo(objPrestamo: PrestamoModel): Observable<PrestamoModel> {
        return this.httpClient.post<PrestamoModel>('http://localhost:3000/prestamos', objPrestamo);
    }
}