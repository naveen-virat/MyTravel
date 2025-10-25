import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewHotelsComponent } from './view-hotels.component';
import { EmployeeLayoutComponent } from '../layouts/employee-layout/employee-layout.component';

describe('ViewHotelsComponent', () => {
  let component: ViewHotelsComponent;
  let fixture: ComponentFixture<ViewHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewHotelsComponent,
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
    fixture = TestBed.createComponent(ViewHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
