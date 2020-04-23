import { TestBed, inject } from '@angular/core/testing';

import { TrainBookingService } from './train-booking/train-booking.service';

describe('TrainBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainBookingService]
    });
  });

  it('should ...', inject([TrainBookingService], (service: TrainBookingService) => {
    expect(service).toBeTruthy();
  }));
});
