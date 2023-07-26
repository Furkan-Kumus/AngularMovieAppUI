import { TestBed } from '@angular/core/testing';

import { UrunlerService } from './urunler.service';

describe('UrunlerService', () => {
  let service: UrunlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
