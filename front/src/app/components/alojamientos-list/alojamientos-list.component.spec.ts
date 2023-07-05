import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientosListComponent } from './alojamientos-list.component';

describe('AlojamientosListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: AlojamientosListComponent;
  let fixture: ComponentFixture<AlojamientosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojamientosListComponent ]
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AlojamientosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
