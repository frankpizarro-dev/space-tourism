import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDetailComponent } from './destination-detail.component';

describe('DestinationDetailComponent', () => {
  let component: DestinationDetailComponent;
  let fixture: ComponentFixture<DestinationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationDetailComponent]
    });
    fixture = TestBed.createComponent(DestinationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});