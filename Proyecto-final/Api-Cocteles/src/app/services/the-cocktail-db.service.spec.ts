import { TestBed } from '@angular/core/testing';

import { TheCocktailDBService } from './the-cocktail-db.service';

describe('TheCocktailDBService', () => {
  let service: TheCocktailDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheCocktailDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
