/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorpalletService } from './colorpallet.service';

describe('Service: Colorpallet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorpalletService]
    });
  });

  it('should ...', inject([ColorpalletService], (service: ColorpalletService) => {
    expect(service).toBeTruthy();
  }));
});
