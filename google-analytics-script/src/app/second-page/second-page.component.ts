import { Component, OnInit } from '@angular/core';

// For using legacy code
declare var ga: any;

// For using new code
declare var gtag: any;

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  private _clickCnt = 0;

  constructor() { }

  ngOnInit() {
  }

  click() {

    // If using legacy coode, uncomment the following function and comment out the 'gtag' function below
    /*
      ga('send', {
        hitType: 'event',
        eventCategory: 'Button',
        eventAction: 'click',
        eventLabel: 'Second Page',
        eventValue: ++this._clickCnt
      });
    */

    gtag('event', 'click', {
      event_category: 'Button',
      event_label: 'Second Page',
      value: ++this._clickCnt
    });

    console.log(`Button clicked ${this._clickCnt} times.`);
    console.log('Click for "Second Page" sent!');
  }

}
