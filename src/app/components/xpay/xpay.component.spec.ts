import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpayComponent } from './xpay.component';

describe('XpayComponent', () => {
  let component: XpayComponent;
  let fixture: ComponentFixture<XpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
