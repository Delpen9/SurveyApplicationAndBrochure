import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacCarouselComponent } from './spac-carousel.component';

describe('SpacCarouselComponent', () => {
  let component: SpacCarouselComponent;
  let fixture: ComponentFixture<SpacCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
