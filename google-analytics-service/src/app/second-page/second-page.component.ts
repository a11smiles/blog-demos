import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent extends BasePageComponent implements OnInit {
  private _clickCnt = 0;

  ngOnInit() {
  }

  click() {
    this.$gaService.logEvent('click', 'Button', 'Second Page', ++this._clickCnt);
    console.log(`Button clicked ${this._clickCnt} times.`);
    console.log('Click for "Second Page" sent!');
  }

}
