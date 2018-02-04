import { TestBed, inject } from '@angular/core/testing';

import { EmartService } from './emart.service';

describe('EmartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmartService]
    });
  });

  it('should be created', inject([EmartService], (service: EmartService) => {
    expect(service).toBeTruthy();
  }));
});
