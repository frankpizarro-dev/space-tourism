import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewImageComponent } from './crew-image.component';

describe('CrewImageComponent', () => {
  let component: CrewImageComponent;
  let fixture: ComponentFixture<CrewImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewImageComponent]
    });
    fixture = TestBed.createComponent(CrewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
