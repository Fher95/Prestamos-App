import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AlertModel } from 'src/app/modules/shared/models/alerts.model';
import { SaldoBancoService } from 'src/app/modules/shared/services/saldo-banco.service';

export enum TabRoutes {
  LST_CLIENTES = '/clientes/lista-clientes',
  LST_PRESTAMOS = '/prestamos/lista-prestamos'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _alert = new Subject<string>();

  public selectedTab = 0;
  public alerta: AlertModel | undefined;

  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private saldoService: SaldoBancoService) { }

  ngOnInit(): void {
    this.escucharNotificacinesAlertas();
  }

  private escucharNotificacinesAlertas() {
    this.saldoService.alertaOperacion$.subscribe(alert => this.alerta = alert);
    this.saldoService.alertaOperacion$.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public onSelectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
    switch (tabIndex) {
      case 0:
        this.router.navigate(['clientes/lista-clientes']);
        break;
      case 1:
        this.router.navigate(['prestamos/lista-prestamos']);
        break;
      default:
        break;
    }
  }

  public activeTab(tabIndex: number): string {
    return this.getTabIndexByUrl() == tabIndex ? 'active' : '';
  }

  private getTabIndexByUrl(): number {
    switch (this.router.url) {
      case TabRoutes.LST_CLIENTES:
        return 0;
      case TabRoutes.LST_PRESTAMOS:
        return 1;
      default:
        return -1;
    }
  }

  public changeSuccessMessage() { this._alert.next(`${new Date()} - Message successfully changed.`); }

}
