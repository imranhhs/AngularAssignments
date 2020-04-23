import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { TrainBookingComponent } from './train-booking/train-booking.component';
import { AppComponent } from "./old/app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ProductComponent, TrainBookingComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
