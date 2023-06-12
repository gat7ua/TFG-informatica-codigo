import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenesBuscaComponent } from './trenes-busca.component';

describe('TrenesBuscaComponent', () => {
  let component: TrenesBuscaComponent;
  let fixture: ComponentFixture<TrenesBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenesBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenesBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
