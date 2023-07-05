import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AlojamientosService } from './alojamientos.service';

describe('AlojamientosService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: AlojamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlojamientosService);
  });
  httpClient = TestBed.get(HttpClient);
  httpTestingController = TestBed.get(HttpTestingController);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
