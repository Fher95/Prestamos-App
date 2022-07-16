import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-solicitar-prestamo',
  templateUrl: './solicitar-prestamo.component.html',
  styleUrls: ['./solicitar-prestamo.component.css']
})
export class SolicitarPrestamoComponent implements OnInit {

  public formPrestamo = this.fb.group({
    monto: [null],
    fechaPago: [null]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSolicitar() {
    console.log(JSON.stringify( this.formPrestamo.getRawValue()))
  }
}
