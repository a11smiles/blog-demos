import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  template: '',
})
export class BasePageComponent implements OnInit {

  constructor(protected $gaService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.$gaService.init();
  }

}
