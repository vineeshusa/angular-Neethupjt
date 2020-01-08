import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {
  DateMessage: string;
  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.DateMessage =
        currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {}
}
