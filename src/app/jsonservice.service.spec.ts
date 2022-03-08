import { TestBed } from '@angular/core/testing';

import { JSONserviceService } from './services/jsonservice.service';

describe('JSONserviceService', () => {
  let service: JSONserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
