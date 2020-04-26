import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrainComponent } from './add-edit-train.component';

describe('AddEditTrainComponent', () => {
  let component: AddEditTrainComponent;
  let fixture: ComponentFixture<AddEditTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
