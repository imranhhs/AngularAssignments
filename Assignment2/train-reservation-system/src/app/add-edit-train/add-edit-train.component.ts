import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainService } from '../train-service/train.service';
import { Train } from '../train-model/train-model';
import { TrainFormGroup } from './train-form/train-form';
import { ActivatedRoute } from '@angular/router';
// import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-train',
  templateUrl: './add-edit-train.component.html',
  styleUrls: ['./add-edit-train.component.css'],
})
export class AddEditTrainComponent implements OnInit {

  form: TrainFormGroup = new TrainFormGroup();

  train: Train = new Train();

  message: string = ""//"Train \"XYZ\" created successfully!"

  editing: boolean = false

  formSubmitButtonTitle = "Create"

  constructor(private trainService: TrainService, private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe( params=> {

      if (params["mode"] == "edit") {
        console.log("mode as Edit")
        this.editing = true
        this.formSubmitButtonTitle = "Save"
        let id = params["id"]
        if (id != null) {
          Object.assign(this.train, trainService.getTrain(id) || new Train() )
        }
      }

      if (params["mode"] == "delete") {
        console.log("mode as Delete")
        let id = params["id"]
        if (id != null) {
          this.trainService.deleteTrain(id)
        }
      }
    })
  }

  ngOnInit(): void {}

  formSubmitted: boolean = false;

  submitForm(form) {
    this.formSubmitted = true;
    if (form.valid) {
      this.trainService.saveTrain(this.train);
      this.message = `Train "${this.train.name}" ${this.editing? "saved" : "created"} successfully!`
      this.train = new Train();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
