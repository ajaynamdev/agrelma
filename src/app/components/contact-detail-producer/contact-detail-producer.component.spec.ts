import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailProducerComponent } from './contact-detail-producer.component';

describe('ContactDetailProducerComponent', () => {
  let component: ContactDetailProducerComponent;
  let fixture: ComponentFixture<ContactDetailProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
