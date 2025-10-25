import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate customer credentials successfully', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const loginRole = 1;
    const mockResponse = 1;

    service.validateCredentials(email, password, loginRole).subscribe(result => {
      expect(result).toBe(mockResponse);
    });

    const req = httpMock.expectOne(`https://localhost:44393/api/TravelAway/ValidateLoginCustomer?emailId=${email}&password=${password}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should validate employee credentials successfully', () => {
    const email = 'employee@example.com';
    const password = 'password123';
    const loginRole = 2;
    const mockResponse = 2;

    service.validateCredentials(email, password, loginRole).subscribe(result => {
      expect(result).toBe(mockResponse);
    });

    const req = httpMock.expectOne(`https://localhost:44393/api/TravelAway/ValidateLoginEmployee?emailId=${email}&password=${password}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should add user details successfully', () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      emailId: 'john@example.com',
      password: 'password123',
      contactNumber: 1234567890,
      address: '123 Main St',
      gender: 'Male',
      dateOfBirth: new Date('1990-01-01'),
      roleId: 1
    };
    const mockResponse = 1;

    service.addUserDetails(
      userData.firstName,
      userData.lastName,
      userData.emailId,
      userData.password,
      userData.contactNumber,
      userData.address,
      userData.gender,
      userData.dateOfBirth,
      userData.roleId
    ).subscribe(result => {
      expect(result).toBe(mockResponse);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/AddCustomer');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      EmailId: userData.emailId,
      UserPassword: userData.password,
      FirstName: userData.firstName,
      LastName: userData.lastName,
      RoleId: userData.roleId,
      Gender: userData.gender,
      DateOfBirth: userData.dateOfBirth,
      Address: userData.address,
      ContactNumber: userData.contactNumber
    });
    req.flush(mockResponse);
  });

  it('should handle HTTP errors', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const loginRole = 1;

    service.validateCredentials(email, password, loginRole).subscribe(
      () => fail('should have failed'),
      error => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne(`https://localhost:44393/api/TravelAway/ValidateLoginCustomer?emailId=${email}&password=${password}`);
    req.error(new ErrorEvent('network error'));
  });
});
