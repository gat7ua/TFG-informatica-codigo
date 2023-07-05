import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosBuscaComponent } from './vehiculos-busca.component';

describe('VehiculosBuscaComponent', () => {
  let component: VehiculosBuscaComponent;
  let fixture: ComponentFixture<VehiculosBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
