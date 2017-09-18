import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import * as moment from 'moment';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  public date = moment();

  public daysArr;

  public ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }

  public createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });

    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }

  nextMonth() {}

  previousMonth() {}
}
