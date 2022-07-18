import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
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
    NgbAlertModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
