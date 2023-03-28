import { TestBed } from '@angular/core/testing';

import { GeneratekeyService } from './generatekey.service';

describe('GeneratekeyService', () => {
  let service: GeneratekeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratekeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
