import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public selectedTab = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private saldoService: SaldoBancoService) { }

  ngOnInit(): void {

    this.activatedRoute.url.subscribe((res) => console.log('PRUEBAA ' + res));
    // this.router.
  }

  public onSelectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
    switch (tabIndex) {
      case 0:
        this.router.navigate(['clientes/lista-clientes']);
        console.log('Select ' + this.router.url);
        break;
      case 1:
        this.router.navigate(['prestamos/lista-prestamos']);
        console.log('Select ' + this.router.url);
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

}
