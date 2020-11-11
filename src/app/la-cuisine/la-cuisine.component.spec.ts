import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCuisineComponent } from './la-cuisine.component';

describe('LaCuisineComponent', () => {
  let component: LaCuisineComponent;
  let fixture: ComponentFixture<LaCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
