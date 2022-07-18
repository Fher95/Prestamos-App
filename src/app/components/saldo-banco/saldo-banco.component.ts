import { Component, OnInit } from '@angular/core';
import { SaldoBancoService } from 'src/app/modules/shared/services/saldo-banco.service';

@Component({
  selector: 'app-saldo-banco',
  templateUrl: './saldo-banco.component.html',
  styleUrls: ['./saldo-banco.component.css']
})
export class SaldoBancoComponent implements OnInit {

  constructor(private saldoService: SaldoBancoService) { }

  ngOnInit(): void {
  }

  
  public getSaldoActual(){ return this.saldoService.getSaldoActual()}

}
