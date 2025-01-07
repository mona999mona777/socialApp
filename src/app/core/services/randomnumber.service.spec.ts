import { TestBed } from '@angular/core/testing';

import { RandomnumberService } from './randomnumber.service';

describe('RandomnumberService', () => {
  let service: RandomnumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomnumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
