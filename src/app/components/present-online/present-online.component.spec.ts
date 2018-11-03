import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentOnlineComponent } from './present-online.component';

describe('PresentOnlineComponent', () => {
  let component: PresentOnlineComponent;
  let fixture: ComponentFixture<PresentOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
