import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewVehiclesComponent } from './view-vehicles.component';
import { EmployeeLayoutComponent } from '../layouts/employee-layout/employee-layout.component';

describe('ViewVehiclesComponent', () => {
  let component: ViewVehiclesComponent;
  let fixture: ComponentFixture<ViewVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewVehiclesComponent,
        EmployeeLayoutComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
