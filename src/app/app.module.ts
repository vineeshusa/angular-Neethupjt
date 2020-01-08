import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./menu/home/home.component";
import { HotelsComponent } from "./menu/home/hotels/hotels.component";
import { FootrComponent } from "./footr/footr.component";
import { ImgComponent } from "./img/img.component";
import { HelpComponent } from "./help/help.component";
import { DateComponent } from "./date/date.component";
import { CarComponent } from "./car/car.component";
import { RegistrationComponent } from "./registration/registration.component";
import { DealsComponent } from "./deals/deals.component";
import { FoodComponent } from "./food/food.component";
//import {RestuatrentComponent} from './restuatrent/restuatrent';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
const myPath: Routes = [
  {
    path: "hotels",
    component: HotelsComponent
  },
  {
    path: "help",
    component: HelpComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "car",
    component: CarComponent
  },
  { path: "registration", component: RegistrationComponent },
  { path: "deals", component: DealsComponent },
  { path: "food", component: FoodComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule,
    RouterModule.forRoot(myPath),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    HomeComponent,
    HotelsComponent,
    FootrComponent,
    ImgComponent,
    HelpComponent,
    DateComponent,
    CarComponent,
    RegistrationComponent,
    DealsComponent,
    FoodComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
