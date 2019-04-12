/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColerpaletService } from './colerpalet.service';

describe('Service: Colerpalet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColerpaletService]
    });
  });

  it('should ...', inject([ColerpaletService], (service: ColerpaletService) => {
    expect(service).toBeTruthy();
  }));
});
