import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRequestComponent } from './latest-request.component';

describe('LatestRequestComponent', () => {
  let component: LatestRequestComponent;
  let fixture: ComponentFixture<LatestRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
