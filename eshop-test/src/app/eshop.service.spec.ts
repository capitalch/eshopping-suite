import { TestBed, inject } from '@angular/core/testing';

import { EshopService } from './eshop.service';

describe('EshopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EshopService]
    });
  });

  it('should be created', inject([EshopService], (service: EshopService) => {
    expect(service).toBeTruthy();
  }));
});
