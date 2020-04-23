import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { TrainBookingComponent } from './train-booking/train-booking.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProductComponent, TrainBookingComponent],
    bootstrap: [TrainBookingComponent]
})
export class AppModule {}
