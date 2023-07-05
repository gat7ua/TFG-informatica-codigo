import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosFormComponent } from './alojamientos-form.component';

describe('AlojamientosFormComponent', () => {
  let component: AlojamientosFormComponent;
  let fixture: ComponentFixture<AlojamientosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamientosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlojamientosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
