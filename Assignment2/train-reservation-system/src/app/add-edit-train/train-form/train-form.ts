import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainValidator } from './train-validators';

export class TrainFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidationMessages() {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${this.label}`);
            break;
          case 'minlength':
            messages.push(`A ${this.label} must be at least
                        ${this.errors['minlength'].requiredLength}
                        characters`);
            break;
          case 'maxlength':
            messages.push(`A ${this.label} must be no more than
                        ${this.errors['maxlength'].requiredLength}
                        characters`);
            break;
          case 'limit':
            messages.push(`A ${this.label} cannot be more
                            than ${this.errors['limit'].limit}`);
            break;
          case 'pattern':
            messages.push(`The ${this.label} contains
                         illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}

export class TrainFormGroup extends FormGroup {
  constructor() {
    super({

      number: new TrainFormControl('Number', 'number', null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern("^[0-9]+$"),
        TrainValidator.Number(50000)
      ])),

      name: new TrainFormControl('Name', 'name', null,Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z ]+$")
      ])),

      source: new TrainFormControl('Source', 'source', null,Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z ]+$")
      ])),

      destination: new TrainFormControl('Destination', 'destination', null,Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z ]+$")
      ])),

      fare: new TrainFormControl('Fare', 'fare', null,Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9.]+$")
      ])),
    });
  }

  get trainFormControls(): TrainFormControl[] {
    return Object.keys(this.controls).map(
      (k) => this.controls[k] as TrainFormControl
    );
  }

  getFormValidationMessages(form: any): string[] {
    let messages: string[] = [];
    this.trainFormControls.forEach((c) =>
      c.getValidationMessages().forEach((m) => messages.push(m))
    );
    return messages;
  }
}
