import { TestBed } from '@angular/core/testing';

import { ImagensericeService } from './imagenserice.service';

describe('ImagensericeService', () => {
  let service: ImagensericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagensericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
