import { inject, TestBed } from '@angular/core/testing';

import { NgxHellojsService } from './ngx-hellojs.service';

describe('NgxHellojsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHellojsService]
    });
  });

  it('should be created', inject([NgxHellojsService], (service: NgxHellojsService) => {
    expect(service).toBeTruthy();
  }));
});
