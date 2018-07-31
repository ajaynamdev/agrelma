import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProducerComponent } from './contact-producer.component';

describe('ContactProducerComponent', () => {
  let component: ContactProducerComponent;
  let fixture: ComponentFixture<ContactProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
