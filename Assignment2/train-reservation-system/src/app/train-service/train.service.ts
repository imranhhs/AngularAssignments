import { Injectable } from '@angular/core';
import { Train } from '../train-model/train-model';

@Injectable({
  providedIn: 'root',
})
export class TrainService {

  private trains: Train[];

  private locator = (p:Train, id:number) => p.id == id;

  constructor() {
    this.loadTrainsDataSource();
  }

  loadTrainsDataSource() {
    this.trains = [
      new Train(1, 'Mumbai Express', 1280, 'Mumbai', 'Ahmedabad', 600),
      new Train(2, 'Bengaluru Express', 1281, 'Bengaluru', 'Chennai', 600),
      new Train(3, 'Chennai Express', 1282, 'Mumbai', 'Chennai', 600),
    ];
  }

  getTrainsDataSource(): Train[] {
    return this.trains
  }

  getTrain(id: number): Train {
    return this.trains.find((p) => this.locator(p, id));
  }

  saveTrain(train: Train) {
    if (train.id == 0 || train.id == null) {
      train.id = this.generateID();
      this.trains.push(train);
    } else {
      let index = this.trains.findIndex((p) => this.locator(p, train.id));
      this.trains.splice(index, 1, train);
    }
  }

  deleteTrain(id: number) {
    let index = this.trains.findIndex((p) => this.locator(p, id));
    if (index > -1) {
      this.trains.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getTrain(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  swapTrain() {
    let p = this.trains.shift();
    this.trains.push(new Train(p.id, p.name, p.number, p.source, p.destination, p.fare));
  }
}
