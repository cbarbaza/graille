import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActualiteComponent } from './actualite.component';

describe('ActualiteComponent', () => {
  let component: ActualiteComponent;
  let fixture: ComponentFixture<ActualiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ActualiteComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
