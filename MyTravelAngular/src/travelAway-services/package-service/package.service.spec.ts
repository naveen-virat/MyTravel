import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PackageService } from './package.service';
import { IPackage } from '../../app/travelAway-interfaces/Package';
import { IVehicle } from '../../app/travelAway-interfaces/Vehicle';
import { IHotel } from '../../app/travelAway-interfaces/Hotel';
import { ICategory } from '../../app/travelAway-interfaces/Category';
import { IPackageDetails } from '../../app/travelAway-interfaces/PackageDetails';
import { IBookPackage } from '../../app/travelAway-interfaces/BookPackage';
import { IViewBookings } from '../../app/travelAway-interfaces/ViewBookings';

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

  it('should get packages successfully', () => {
    const mockPackages: IPackage[] = [
      { packageId: 1, packageName: 'Beach Paradise', packageCategoryId: 1, typeOfPackage: 'Luxury' },
      { packageId: 2, packageName: 'Mountain Adventure', packageCategoryId: 2, typeOfPackage: 'Adventure' }
    ];

    service.getPackages().subscribe(packages => {
      expect(packages).toEqual(mockPackages);
      expect(packages.length).toBe(2);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/GetPackages');
    expect(req.request.method).toBe('GET');
    req.flush(mockPackages);
  });

  it('should get vehicles successfully', () => {
    const mockVehicles: IVehicle[] = [
      { vehicleName: 'Toyota Camry', vehicleType: 'Sedan', ratePerHour: 50, ratePerKm: 10, basePrice: 100 },
      { vehicleName: 'Honda CRV', vehicleType: 'SUV', ratePerHour: 60, ratePerKm: 12, basePrice: 120 }
    ];

    service.getVehicles().subscribe(vehicles => {
      expect(vehicles).toEqual(mockVehicles);
      expect(vehicles.length).toBe(2);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/GetVehicles');
    expect(req.request.method).toBe('GET');
    req.flush(mockVehicles);
  });

  it('should get hotels successfully', () => {
    const mockHotels: IHotel[] = [
      { hotelName: 'Grand Hotel', hotelRating: 5, singleRoomPrice: 200, doubleRoomPrice: 300, deluxeeRoomPrice: 400, suiteRoomPrice: 600, city: 'Miami' },
      { hotelName: 'Beach Resort', hotelRating: 4, singleRoomPrice: 150, doubleRoomPrice: 250, deluxeeRoomPrice: 350, suiteRoomPrice: 500, city: 'California' }
    ];

    service.getHotels().subscribe(hotels => {
      expect(hotels).toEqual(mockHotels);
      expect(hotels.length).toBe(2);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/GetHotels');
    expect(req.request.method).toBe('GET');
    req.flush(mockHotels);
  });

  it('should get categories successfully', () => {
    const mockCategories: ICategory[] = [
      { packageCategoryId: 1, packageCategoryName: 'Beach' },
      { packageCategoryId: 2, packageCategoryName: 'Mountain' }
    ];

    service.getCategories().subscribe(categories => {
      expect(categories).toEqual(mockCategories);
      expect(categories.length).toBe(2);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/GetPackageCategories');
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });

  it('should get package details by package ID', () => {
    const packageId = '1';
    const mockPackageDetails: IPackageDetails[] = [
      { packageDetailsId: 1, packageId: 1, placesToVisit: 'Beach', description: 'Relax on the beach', noOfDays: 1, noOfNights: 1, accomodation: 'Hotel', pricePerAdult: 100 },
      { packageDetailsId: 2, packageId: 1, placesToVisit: 'Water Park', description: 'Enjoy water activities', noOfDays: 2, noOfNights: 1, accomodation: 'Resort', pricePerAdult: 150 }
    ];

    service.getPackageDetails(packageId).subscribe(details => {
      expect(details).toEqual(mockPackageDetails);
      expect(details.length).toBe(2);
    });

    const req = httpMock.expectOne(`https://localhost:44393/api/TravelAway/GetPackageDetailsByPackageId?packageId=${packageId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPackageDetails);
  });

  it('should book package successfully', () => {
    const bookingData: IBookPackage = {
      contactNumber: 1234567890,
      emailId: 'test@example.com',
      address: '123 Main St',
      dateOfTravel: new Date(),
      numberOfAdults: 2,
      numberOfChildren: 1,
      status: 'Confirmed',
      packageId: 1
    };
    const mockResponse = 123;

    service.bookPackage(bookingData).subscribe(result => {
      expect(result).toBe(mockResponse);
    });

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/AddBookPackage');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(bookingData);
    req.flush(mockResponse);
  });

  it('should get bookings by email', () => {
    const email = 'test@example.com';
    const mockBookings: IViewBookings[] = [
      { bookingId: 1, numberOfAdults: 2, numberOfChildren: 1, dateOfTravel: new Date(), totalAmount: 500, placesToVisit: 'Beach', noOfDays: 3, noOfRooms: 1, noOfNights: 2, packageName: 'Beach Paradise' },
      { bookingId: 2, numberOfAdults: 1, numberOfChildren: 0, dateOfTravel: new Date(), totalAmount: 300, placesToVisit: 'Mountains', noOfDays: 2, noOfRooms: 1, noOfNights: 1, packageName: 'Mountain Adventure' }
    ];

    service.getBookings(email).subscribe(bookings => {
      expect(bookings).toEqual(mockBookings);
      expect(bookings.length).toBe(2);
    });

    const req = httpMock.expectOne(`https://localhost:44393/api/TravelAway/ViewBookedPackages?email=${email}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBookings);
  });

  it('should handle HTTP errors', () => {
    service.getPackages().subscribe(
      () => fail('should have failed'),
      error => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne('https://localhost:44393/api/TravelAway/GetPackages');
    req.error(new ErrorEvent('network error'));
  });
});
