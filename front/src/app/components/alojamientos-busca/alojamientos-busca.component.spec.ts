import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosBuscaComponent } from './alojamientos-busca.component';

describe('AlojamientosBuscaComponent', () => {
  let component: AlojamientosBuscaComponent;
  let fixture: ComponentFixture<AlojamientosBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamientosBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlojamientosBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
