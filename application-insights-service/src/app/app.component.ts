import { Component, OnInit } from '@angular/core';
import { ApplicationInsightsService } from './application-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Application Insights Service';

  constructor(private _$gaService: ApplicationInsightsService) {  }

  ngOnInit() {
    this._$gaService.init();
  }
}
