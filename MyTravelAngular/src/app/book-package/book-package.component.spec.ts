import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { BookPackageComponent } from './book-package.component';
import { UserLayoutComponent } from '../layouts/user-layout/user-layout.component';

describe('BookPackageComponent', () => {
  let component: BookPackageComponent;
  let fixture: ComponentFixture<BookPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookPackageComponent,
        UserLayoutComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
