import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosFormComponent } from './vuelos-form.component';

describe('VuelosFormComponent', () => {
  let component: VuelosFormComponent;
  let fixture: ComponentFixture<VuelosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
