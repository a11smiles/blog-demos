import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent extends BasePageComponent implements OnInit {
  private _clickCnt = 0;

  ngOnInit() {
  }

  click() {
    this.$gaService.captureEvent('click', 'Button', 'First Page', ++this._clickCnt);
    console.log(`Button clicked ${this._clickCnt} times.`);
    console.log('Click for "First Page" sent!');
  }
}
