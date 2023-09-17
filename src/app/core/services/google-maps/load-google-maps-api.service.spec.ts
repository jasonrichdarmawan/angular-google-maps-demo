import { TestBed } from '@angular/core/testing';

import { LoadGoogleMapsAPIService } from './load-google-maps-api.service';

describe('LoadGoogleMapsAPIService', () => {
  let service: LoadGoogleMapsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadGoogleMapsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
