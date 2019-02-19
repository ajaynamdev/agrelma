import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelistOfferComponent } from './relist-offer.component';

describe('RelistOfferComponent', () => {
  let component: RelistOfferComponent;
  let fixture: ComponentFixture<RelistOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelistOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelistOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
