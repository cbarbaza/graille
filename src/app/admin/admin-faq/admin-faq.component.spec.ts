import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFAQComponent } from './admin-faq.component';

describe('AdminFAQComponent', () => {
  let component: AdminFAQComponent;
  let fixture: ComponentFixture<AdminFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
