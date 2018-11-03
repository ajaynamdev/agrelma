import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSiteComponent } from './mini-site.component';

describe('MiniSiteComponent', () => {
  let component: MiniSiteComponent;
  let fixture: ComponentFixture<MiniSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
