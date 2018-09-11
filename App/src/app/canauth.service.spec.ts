import { TestBed, inject } from '@angular/core/testing';

import { CanauthService } from './canauth.service';

describe('CanauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanauthService]
    });
  });

  it('should be created', inject([CanauthService], (service: CanauthService) => {
    expect(service).toBeTruthy();
  }));
});
