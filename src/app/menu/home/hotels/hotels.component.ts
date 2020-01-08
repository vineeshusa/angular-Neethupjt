import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
clicked=function()
{
alert("booked");
}
Rclicked=function()
{
  alert("Reserved");
}
  constructor() { }

  ngOnInit() {
  }

}