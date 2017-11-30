import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-week-switcher',
  templateUrl: './week-switcher.component.html',
  styleUrls: ['./week-switcher.component.css']
})
export class WeekSwitcherComponent implements OnInit {
  private BASE_URL = "http://localhost:4751/api/EventsApi";
  private headers = new Headers({'Content-Type': 'application/json'});
  private monday: Date;
  private week: Object

  constructor(private http: HttpClient) {
    let date = new Date();
    this.setMonday(date);
    this.getEvents();
  }

  setMonday(date: Date) {
    let weekstart = date.getDate() - date.getDay() +1;
    this.monday = new Date(date.setDate(weekstart));
  }


  prevWeek() {
    let date = this.monday
    date.setDate(date.getDate() - 7)
    this.setMonday(date);
    this.getEvents();
  }

  nextWeek() {
    let date = this.monday
    date.setDate(date.getDate() + 7)
    this.setMonday(date);
    this.getEvents();
  }

  getEvents() {
    this.http.get(this.BASE_URL + '?startDate=' + this.monday.toISOString()).subscribe(data => {
      // Read the result field from the JSON response.
      this.week = data;
      console.log(this.week)
    });
  }
  ngOnInit() {
  }

}
