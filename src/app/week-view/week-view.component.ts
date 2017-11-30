import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {
  private BASE_URL = "http://localhost:4751/api/EventsApi";
  private headers = new Headers({'Content-Type': 'application/json'});

  @Input() monday: Date
  week: Object
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.BASE_URL + '?startDate=' + this.monday.toISOString()).subscribe(data => {
      // Read the result field from the JSON response.
      this.week = data;
      console.log(this.week)
    });
  }

}
