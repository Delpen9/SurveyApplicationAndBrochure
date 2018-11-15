import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDropdownComponent } from './rating-dropdown.component';

describe('RatingDropdownComponent', () => {
  let component: RatingDropdownComponent;
  let fixture: ComponentFixture<RatingDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
