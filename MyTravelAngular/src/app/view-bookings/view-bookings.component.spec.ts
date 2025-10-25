import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewBookingsComponent } from './view-bookings.component';
import { UserLayoutComponent } from '../layouts/user-layout/user-layout.component';

describe('ViewBookingsComponent', () => {
  let component: ViewBookingsComponent;
  let fixture: ComponentFixture<ViewBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewBookingsComponent,
        UserLayoutComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
