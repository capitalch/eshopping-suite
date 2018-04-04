import { TestBed, inject } from '@angular/core/testing';

import { JxFormService } from './json-form.service';

describe('JxFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JxFormService]
    });
  });

  it('should be created', inject([JxFormService], (service: JxFormService) => {
    expect(service).toBeTruthy();
  }));
});
