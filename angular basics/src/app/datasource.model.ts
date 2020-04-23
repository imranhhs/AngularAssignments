import {Product} from "./product.model";
import { Train } from "./train-booking/train.model";
import { TrainBookingComponent } from "./train-booking/train-booking.component";

export class SimpleDataSource {
    private data:Product[];

    private trains: Train[] = [
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" },
      { id: "1", trainName: "Mumbai Express", trainNumber: "1280", trainSource: "Mumbai", trainDestination: "Ahmedabad" }
    ]

    constructor() {
        this.data = new Array<Product>(
        new Product(1, "Kayak", "Watersports", 275),
        new Product(2, "Lifejacket", "Watersports", 48.95),
        new Product(3, "Soccer Ball", "Soccer", 19.50),
        new Product(4, "Corner Flags", "Soccer", 34.95),
        new Product(5, "Thinking Cap", "Chess", 16));
    }

    getData(): Product[] {
        return this.data;
    }

    getTrains(): Train[] {
      return [...this.trains];
  }
}
