import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footr',
  templateUrl: './footr.component.html',
  styleUrls: ['./footr.component.css']
})
export class FootrComponent implements OnInit {
foot:string;

  constructor() {
  this.foot="All rights are included &copy; 2020"
   }

  ngOnInit() {
  }

}