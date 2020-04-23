import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBookingComponent } from './train-booking.component';

describe('TrainBookingComponent', () => {
  let component: TrainBookingComponent;
  let fixture: ComponentFixture<TrainBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
