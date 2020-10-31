import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQFormComponent } from './faqform.component';

describe('FAQFormComponent', () => {
  let component: FAQFormComponent;
  let fixture: ComponentFixture<FAQFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQFormComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
