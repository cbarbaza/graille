import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartnerComponent } from './admin-partner.component';

describe('AdminPartnerComponent', () => {
  let component: AdminPartnerComponent;
  let fixture: ComponentFixture<AdminPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
