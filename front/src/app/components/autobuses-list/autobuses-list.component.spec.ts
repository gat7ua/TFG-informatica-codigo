import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesListComponent } from './autobuses-list.component';

describe('AutobusesListComponent', () => {
  let component: AutobusesListComponent;
  let fixture: ComponentFixture<AutobusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutobusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
