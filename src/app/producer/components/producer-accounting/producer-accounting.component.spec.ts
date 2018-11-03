import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerAccountingComponent } from './producer-accounting.component';

describe('ProducerAccountingComponent', () => {
  let component: ProducerAccountingComponent;
  let fixture: ComponentFixture<ProducerAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
