import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Body } from './body.component';

describe('Body', () => {
  let component: Body;
  let fixture: ComponentFixture<Body>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
