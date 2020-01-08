import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
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