import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAgrelmaComponent } from './message-agrelma.component';

describe('MessageAgrelmaComponent', () => {
  let component: MessageAgrelmaComponent;
  let fixture: ComponentFixture<MessageAgrelmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageAgrelmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAgrelmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
