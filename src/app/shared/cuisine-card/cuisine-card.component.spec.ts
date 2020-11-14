import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineCardComponent } from './cuisine-card.component';

describe('CuisineCardComponent', () => {
  let component: CuisineCardComponent;
  let fixture: ComponentFixture<CuisineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
