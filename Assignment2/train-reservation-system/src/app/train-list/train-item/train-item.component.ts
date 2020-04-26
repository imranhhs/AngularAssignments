import { Component, OnInit, Input } from '@angular/core';
import { Train } from 'src/app/train-model/train-model';

@Component({
  selector: 'app-train-item',
  templateUrl: './train-item.component.html',
  styleUrls: ['./train-item.component.css']
})
export class TrainItemComponent implements OnInit {

  @Input() train: Train

  constructor() { }

  ngOnInit(): void {
  }

}
