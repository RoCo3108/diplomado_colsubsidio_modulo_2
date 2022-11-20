import { TestBed } from '@angular/core/testing';

import { RickAndMortyServicesService } from './rick-and-morty-services.service';

describe('RickAndMortyServicesService', () => {
  let service: RickAndMortyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
