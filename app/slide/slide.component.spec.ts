import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide } from './slide.component';

describe('Slide', () => {
  let component: Slide;
  let fixture: ComponentFixture<Slide>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
