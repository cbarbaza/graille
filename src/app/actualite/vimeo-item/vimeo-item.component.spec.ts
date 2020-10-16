import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoItemComponent } from './vimeo-item.component';

describe('VimeoItemComponent', () => {
  let component: VimeoItemComponent;
  let fixture: ComponentFixture<VimeoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VimeoItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VimeoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
