import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../services/prestamos.service';


@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.component.html',
  styleUrls: ['./lista-prestamos.component.css']
})
export class ListaPrestamosComponent implements OnInit {

  listaPrestamos$ = this.prestamosService.getListaPrestamos();

  constructor(private prestamosService: PrestamosService) { }

  ngOnInit(): void {
  }

}
