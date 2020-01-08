import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  display = "true";
  imgname: string[];
  constructor() {
    this.imgname = ["K", "Y", "A", "N"];
  }

  ngOnInit() {}
}
