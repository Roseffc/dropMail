/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DropmailService } from './dropmail.service';

describe('Service: Dropmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropmailService]
    });
  });

  it('should ...', inject([DropmailService], (service: DropmailService) => {
    expect(service).toBeTruthy();
  }));
});
