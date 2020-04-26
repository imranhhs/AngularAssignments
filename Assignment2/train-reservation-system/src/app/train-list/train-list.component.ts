import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../train-model/train-model';
import { TrainService } from '../train-service/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trains: Train[]

  @Input() shouldShowOption: boolean = true

  constructor(private trainService: TrainService, private router: Router) { }

  ngOnInit(): void {
    this.trains = this.trainService.getTrainsDataSource()
  }

  onEditTrain(train: Train) {
    let id = train.id
    this.router.navigateByUrl(`/train/edit/${id}`);
  }

  onDeleteTrain(train: Train) {
    // console.log('onDeleteTrain called')
    this.trainService.deleteTrain(train.id)
    // this.router.navigateByUrl("/train/delete/1")
  }
}
