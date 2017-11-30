import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-switcher',
  templateUrl: './week-switcher.component.html',
  styleUrls: ['./week-switcher.component.css']
})
export class WeekSwitcherComponent implements OnInit {
  monday: Date;
  constructor() {
    let date = new Date();
    this.setMonday(date);
  }

  setMonday(date: Date) {
    let weekstart = date.getDate() - date.getDay() +1;
    this.monday = new Date(date.setDate(weekstart));
  }


  prevWeek() {
    let date = this.monday
    date.setDate(date.getDate() - 7)
    this.setMonday(date);
  }

  nextWeek() {
    let date = this.monday
    date.setDate(date.getDate() + 7)
    this.setMonday(date);
  }

  ngOnInit() {
  }

}
