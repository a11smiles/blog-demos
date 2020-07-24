import { Component, OnInit } from '@angular/core';

declare var ga: any;

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click() {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'click',
      eventLabel: 'First Page'
    });
    console.log('Click for "First Page" sent!');
  }
}
