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
  public today = moment();

  public daysArr;

  public ngOnInit() {
    console.log(this.today);
    this.daysArr = Array.apply(null, { length: 30 });
    console.log(this.daysArr);
  }
}
