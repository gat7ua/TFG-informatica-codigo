import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacAutobusFormComponent } from './estac-autobus-form.component';

describe('EstacAutobusFormComponent', () => {
  let component: EstacAutobusFormComponent;
  let fixture: ComponentFixture<EstacAutobusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacAutobusFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacAutobusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
