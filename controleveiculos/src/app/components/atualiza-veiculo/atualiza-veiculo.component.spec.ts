import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaVeiculoComponent } from './atualiza-veiculo.component';

describe('AtualizaVeiculoComponent', () => {
  let component: AtualizaVeiculoComponent;
  let fixture: ComponentFixture<AtualizaVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
