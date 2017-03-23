import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  yesterday = new Date( +new Date() - 1000*60*60*24);
  twodaysago = new Date( +new Date() - 1000*60*60*24 * 2);
  monthago = new Date( + new Date() - 1000*60*60*24*31 );
  twomonthsago = new Date( + new Date() - 1000*60*60*24*31 *2);
  yearago = new Date( + new Date() - 1000*60*60*24*365 );
  twoyearsago = new Date( + new Date() - 1000*60*60*24*365 *2);
  constructor(){

  }
}
