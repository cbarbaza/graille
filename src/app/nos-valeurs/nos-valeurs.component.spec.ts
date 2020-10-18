import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosValeursComponent } from './nos-valeurs.component';

describe('NosValeursComponent', () => {
  let component: NosValeursComponent;
  let fixture: ComponentFixture<NosValeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosValeursComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosValeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
