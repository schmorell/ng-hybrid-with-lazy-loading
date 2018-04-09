import { TestBed, inject } from '@angular/core/testing';

import { NgServiceService } from './ng-service.service';

describe('NgServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgServiceService]
    });
  });

  it('should be created', inject([NgServiceService], (service: NgServiceService) => {
    expect(service).toBeTruthy();
  }));
});
