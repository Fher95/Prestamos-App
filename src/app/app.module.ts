import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaldoBancoService } from './modules/shared/services/saldo-banco.service';
import { SharedModule } from './modules/shared/shared.module';
import { SaldoBancoComponent } from './components/saldo-banco/saldo-banco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaldoBancoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
