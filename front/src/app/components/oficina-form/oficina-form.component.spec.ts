import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaFormComponent } from './oficina-form.component';

describe('OficinaFormComponent', () => {
  let component: OficinaFormComponent;
  let fixture: ComponentFixture<OficinaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
