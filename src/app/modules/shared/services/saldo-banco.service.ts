import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertModel } from '../models/alerts.model';

@Injectable({
  providedIn: 'root'
})
export class SaldoBancoService {

  public alertaOperacion$ = new Subject<AlertModel>();

  private saldoActual = environment.capitalBase;

  constructor() { }

  getSaldoActual() {
    return this.saldoActual;
  }

  setSaldoActual(saldoActual: number) {
    this.saldoActual = saldoActual;
  }

  notificarOperacion(alerta: AlertModel) {
    this.alertaOperacion$.next(alerta);
  }

  aprobarPrestamo(): boolean {
    const porcentaje = Math.random() * 100;
    if (porcentaje < 50) {
      return true;
    }
    return false;
  }
}
