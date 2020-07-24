import { Component, OnInit } from '@angular/core';

declare var ga: any;

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click() {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'click',
      eventLabel: 'Second Page'
    });
    console.log('Click for "Second Page" sent!');
  }

}
