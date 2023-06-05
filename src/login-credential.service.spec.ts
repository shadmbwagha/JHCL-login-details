import { TestBed } from '@angular/core/testing';

import { LoginCredentialService } from './login-credential.service';

describe('LoginCredentialService', () => {
  let service: LoginCredentialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCredentialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
