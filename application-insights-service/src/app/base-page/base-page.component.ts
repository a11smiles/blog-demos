import { Component, OnInit } from '@angular/core';
import { ApplicationInsightsService } from '../application-insights.service';

@Component({
  template: '',
})
export class BasePageComponent implements OnInit {

  constructor(protected $aiService: ApplicationInsightsService) { }

  ngOnInit() {  }

}
