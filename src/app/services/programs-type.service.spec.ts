import { TestBed } from '@angular/core/testing';

import { ProgramsTypeService } from './programs-type.service';

describe('ProgramsTypeService', () => {
  let service: ProgramsTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramsTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
