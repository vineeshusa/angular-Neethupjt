import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menu: string[];
  name: string[];
  heading: string;
  constructor() {
    this.menu = ["Home", "Hotels", "Cars", "Restuarants", "Deals", "Help"];
    this.name = ["K", "Y", "A", "N"];
    this.heading = "Search hundreds of travel sites at once.";
  }

  ngOnInit() {}
}
