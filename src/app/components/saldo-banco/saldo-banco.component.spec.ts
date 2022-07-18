import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoBancoComponent } from './saldo-banco.component';

describe('SaldoBancoComponent', () => {
  let component: SaldoBancoComponent;
  let fixture: ComponentFixture<SaldoBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
