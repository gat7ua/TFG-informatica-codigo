import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosBuscaComponent } from './vuelos-busca.component';

describe('VuelosBuscaComponent', () => {
  let component: VuelosBuscaComponent;
  let fixture: ComponentFixture<VuelosBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
