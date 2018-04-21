import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { fromEvent } from 'rxjs/Observable/fromEvent';
import { throttle, debounce } from 'rxjs/operators';
// import {throttle} from 'rxjs/add';
// import 'rxjs/add/operator/throttle';
import { timer } from "rxjs/observable/timer";
import { interval } from 'rxjs/observable/interval';
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.doThrottle();
    // this.doDebounce();
  }

  doThrottle() {
    const obs: Observable<number> = interval(100).pipe(throttle(() => interval(1000)));
    // const obs2 = obs.throttle(()=>interval(1000));
    // const obs2 = obs.pipe(throttle(() => interval(1000)));
    // const obs: Observable<number> = interval(100).throttle(() => interval(1000));
    const obs1 = obs.subscribe(d => {
      console.log(d);
      (d == 100) && obs1.unsubscribe();
    });
  }

  doDebounce() {
    const obs: Observable<number> = interval(120).pipe(throttle(() => interval(1000)));
    const obs1 = obs.subscribe(d => {
      console.log(d);
      (d == 100) && obs1.unsubscribe();
    });
  }

}
