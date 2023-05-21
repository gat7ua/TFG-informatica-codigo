import { TestBed } from '@angular/core/testing';

import { TrenesService } from './trenes.service';

describe('TrenesService', () => {
  let service: TrenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
