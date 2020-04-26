import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditTrainComponent } from './add-edit-train/add-edit-train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { TrainSearchComponent } from './train-search/train-search.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'add', component: AddEditTrainComponent},
  { path:'train/add', component: AddEditTrainComponent},

  { path:'train/:mode/:id', component: AddEditTrainComponent},

  { path:'trains', component: TrainListComponent},
  { path:'search', component: TrainSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
