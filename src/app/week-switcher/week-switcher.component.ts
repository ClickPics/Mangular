import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-switcher',
  templateUrl: './week-switcher.component.html',
  styleUrls: ['./week-switcher.component.css']
})
export class WeekSwitcherComponent implements OnInit {
  date: Date;
  constructor() {
    this.date = new Date();
  }

  prevWeek() {
    
  }

  nextWeek() {

  }

  ngOnInit() {
  }

}
