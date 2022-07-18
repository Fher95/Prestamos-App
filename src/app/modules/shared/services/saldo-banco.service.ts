import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaldoBancoService {

  private saldoActual = environment.capitalBase;

  constructor() { }

  getSaldoActual() {
    return this.saldoActual;
  }

  setSaldoActual(saldoActual: number) {
    this.saldoActual = saldoActual;
  }
}
