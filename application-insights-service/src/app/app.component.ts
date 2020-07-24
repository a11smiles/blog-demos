import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Application Insights Service';

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _$titleService: Title) {  }

  ngOnInit() {
    this.title = this._$titleService.getTitle();
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const lastChild = child => child.firstChild ? lastChild(child.firstChild) : child;
        return lastChild(this._activatedRoute.firstChild).snapshot.data['title'] || this.title;
      })
    ).subscribe((title) => {
      this._$titleService.setTitle(title);
    });
  }
}
