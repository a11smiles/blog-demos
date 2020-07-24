import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Google Analytics Service';

  constructor(private _$gaService: GoogleAnalyticsService) {  }

  ngOnInit() {
    this._$gaService.init();
  }
}
