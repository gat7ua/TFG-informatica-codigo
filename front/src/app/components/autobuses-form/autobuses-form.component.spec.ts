import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesFormComponent } from './autobuses-form.component';

describe('AutobusesFormComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: AutobusesFormComponent;
  let fixture: ComponentFixture<AutobusesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesFormComponent ]
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AutobusesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
