import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from 'src/environments/environment';


declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class ApplicationInsightsService {
  appInsights: ApplicationInsights;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.applicationInsightsKey,
        enableAutoRouteTracking: true
      }
    });
    this.appInsights.loadAppInsights();

    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((page: NavigationEnd) => {
      const lastChild = child => child.firstChild ? lastChild(child.firstChild) : child;
      this.logPageView(lastChild(this._activatedRoute.firstChild).snapshot.data.title, page.url);
    });
  }

  init() { }

  logPageView(name, url) { // option to call manually
    this.appInsights.trackPageView({
      name: name,
      uri: url
    });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  logMetric(name: string, average: number, properties?: { [key: string]: any }) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({ exception: exception, severityLevel: severityLevel });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
