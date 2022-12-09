import { TestBed } from '@angular/core/testing';

import { DigimonesService } from './digimones.service';

describe('DigimonesService', () => {
  let service: DigimonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
