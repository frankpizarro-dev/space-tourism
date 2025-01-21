import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailComponent } from './crew-detail.component';

describe('CrewDetailComponent', () => {
  let component: CrewDetailComponent;
  let fixture: ComponentFixture<CrewDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewDetailComponent]
    });
    fixture = TestBed.createComponent(CrewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
