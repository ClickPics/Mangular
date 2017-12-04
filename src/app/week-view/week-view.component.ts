import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import _ from 'lodash';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  @Input() week: Array<Object>
   isWeekEmpty : Boolean

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['week']) {
        this.isWeekEmpty = _.reduce(this.week, (count, day) => { return count + day.events.length }, 0) === 0
    }
}

}
