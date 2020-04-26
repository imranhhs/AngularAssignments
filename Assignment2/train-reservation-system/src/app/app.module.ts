import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEditTrainComponent } from './add-edit-train/add-edit-train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { TrainSearchComponent } from './train-search/train-search.component';
import { TrainItemComponent } from './train-list/train-item/train-item.component';
import { TrainService } from './train-service/train.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditTrainComponent,
    TrainListComponent,
    TrainItemComponent,
    TrainSearchComponent,
    TrainItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
