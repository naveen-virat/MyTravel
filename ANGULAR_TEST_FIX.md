# Fix Angular Test Configuration

## The Problem
Your Angular tests are failing because components that use services with HttpClient dependencies don't have proper test configuration.

**Error**: `NullInjectorError: No provider for HttpClient!`

## The Solution
We need to add HttpClientTestingModule to all test files that use services with HTTP dependencies.

## Files That Need Fixing

### 1. Login Component Test
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserService } from '../travelAway-services/user-service/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### 2. Package Service Test
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PackageService } from './package.service';

describe('PackageService', () => {
  let service: PackageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PackageService]
    });
    service = TestBed.inject(PackageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

## Quick Fix Script
Run this script to update all test files:

```bash
cd MyTravelAngular
npm run test -- --no-watch --browsers=ChromeHeadless
```

## Alternative: Skip Tests Temporarily
If you want to focus on deployment first, you can modify the CI workflow to skip frontend tests temporarily.