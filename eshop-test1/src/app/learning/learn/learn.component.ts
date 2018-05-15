import { Component, OnInit } from '@angular/core';
import { delayWhen, skipUntil, takeWhile, skipWhile, takeUntil, tap } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
// import {takeUntilWithTime} from 'rxjs/Observable/takeUntilWithTime';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/if';
// import 'rxjs/add/observable/takeUntil';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/skipWhile';

import { of } from 'rxjs/observable/of';



@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  isInitialized = false;
  isNotInitialized = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnInit() {

    const source1 = interval(1000);
    // source1.subscribe(x => {
    //   const a = this.getIsInitialized() && (this.destroy$.next(true));
    // });

    // const source2 = interval(1000);
    // const example2 = source2.takeUntil(this.destroy$);

    // const subscribe = example2.subscribe(val => console.log(val));

  }

  getIsInitialized() {
    return (this.isInitialized);
  }

  getIsNotInitialized() {
    return (this.isNotInitialized);
  }

  testMe() {
    this.isInitialized = true;
    this.isNotInitialized = false;
    this.destroy$.next(true);
  }

}
