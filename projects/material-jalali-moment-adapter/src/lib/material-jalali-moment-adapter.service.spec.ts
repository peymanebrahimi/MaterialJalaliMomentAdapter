import { TestBed } from '@angular/core/testing';

import { MaterialJalaliMomentAdapterService } from './material-jalali-moment-adapter.service';

describe('MaterialJalaliMomentAdapterService', () => {
  let service: MaterialJalaliMomentAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialJalaliMomentAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
