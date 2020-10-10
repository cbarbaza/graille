import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoComponent } from './vimeo.component';

describe('VimeoComponent', () => {
  let component: VimeoComponent;
  let fixture: ComponentFixture<VimeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VimeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VimeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
