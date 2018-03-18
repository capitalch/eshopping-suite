import { TestBed, inject } from '@angular/core/testing';

import { JsonFormService } from './json-form.service';

describe('JsonFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonFormService]
    });
  });

  it('should be created', inject([JsonFormService], (service: JsonFormService) => {
    expect(service).toBeTruthy();
  }));
});
