import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Model } from "../repository.model";
import { Train } from "./train.model";

@Component({
  selector: 'app-train-booking',
  templateUrl: './train-booking.component.html',
  styleUrls: ['./train-booking.component.css']
})
export class TrainBookingComponent implements OnInit {

  model: Model = new Model();

  constructor(private applicationRef: ApplicationRef) {
    (<any>window).appRef = applicationRef;
    (<any>window).model = this.model;
   }

  ngOnInit() {
  }

  getTrainByPosition(position: number): Train {
      return this.model.getTrains()[position];
  }

  getTrain(key: string): Train {
      return this.model.getTrain(key);
  }

  getTrains(): Train[] {
    return this.model.getTrains();
  }

  getTrainsCount(): number {
      console.log("getTrainsCount invoked");
      return this.getTrains().length;
  }

  targetName: string = "Kayak";
  counter: number = 1;

  getKey(index: string, product: Train) {
      return product.id;
  }

  get nextTrain(): Train {
      return this.model.getTrains().shift();
  }

  // getProductPrice(index: number): number {
  //     return Math.floor(this.getProduct(index).price);
  // }
}
