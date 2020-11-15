import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCounterComponent } from './admin-counter.component';

describe('AdminCounterComponent', () => {
  let component: AdminCounterComponent;
  let fixture: ComponentFixture<AdminCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
