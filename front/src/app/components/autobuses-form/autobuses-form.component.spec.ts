import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesFormComponent } from './autobuses-form.component';

describe('AutobusesFormComponent', () => {
  let component: AutobusesFormComponent;
  let fixture: ComponentFixture<AutobusesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutobusesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
