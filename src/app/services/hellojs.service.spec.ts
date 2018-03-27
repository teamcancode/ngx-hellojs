import { inject, TestBed } from '@angular/core/testing';

import { HellojsService } from './hellojs.service';

describe('HellojsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HellojsService]
    });
  });

  it('should be created', inject([HellojsService], (service: HellojsService) => {
    expect(service).toBeTruthy();
  }));
});
