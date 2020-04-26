import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train-service/train.service';

@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.css']
})
export class TrainSearchComponent implements OnInit {

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
  }

  getSourceStations(): string[] {
    const cities = new Array<string>();

    this.trainService.getTrainsDataSource().forEach(train => {
      if (!cities.includes(train.source)) {
        cities.push(train.source)
      }
    })
    return cities;
  }

  getDestinationStations(): string[] {
    const cities = new Array<string>();

    this.trainService.getTrainsDataSource().forEach(train => {
      if (!cities.includes(train.destination)) {
        cities.push(train.destination)
      }
    })
    return cities;
  }

  searchTrains() {

  }
}
