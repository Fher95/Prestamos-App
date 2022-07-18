import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoBancoService } from './services/saldo-banco.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { 
  public static forRoot() {
    return {ngModule: SharedModule, providers: [SaldoBancoService]};
  }
}
