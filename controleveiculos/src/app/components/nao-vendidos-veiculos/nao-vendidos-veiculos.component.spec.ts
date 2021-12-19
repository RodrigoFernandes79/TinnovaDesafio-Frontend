import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoVendidosVeiculosComponent } from './nao-vendidos-veiculos.component';

describe('NaoVendidosVeiculosComponent', () => {
  let component: NaoVendidosVeiculosComponent;
  let fixture: ComponentFixture<NaoVendidosVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoVendidosVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoVendidosVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
