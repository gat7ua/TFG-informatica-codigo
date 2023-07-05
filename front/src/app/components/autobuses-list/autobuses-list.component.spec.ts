import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesListComponent } from './autobuses-list.component';

describe('AutobusesListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: AutobusesListComponent;
  let fixture: ComponentFixture<AutobusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesListComponent ]
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AutobusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
