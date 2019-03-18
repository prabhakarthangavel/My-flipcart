import { TestBed } from '@angular/core/testing';

import { MensFashionClothingService } from './mens-fashion-clothing.service';

describe('MensFashionClothingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensFashionClothingService = TestBed.get(MensFashionClothingService);
    expect(service).toBeTruthy();
  });
});
