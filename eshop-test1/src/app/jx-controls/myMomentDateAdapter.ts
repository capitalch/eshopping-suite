import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';
import { NativeDateAdapter } from '@angular/material';

// const moment = _rollupMoment || _moment;

export class MyDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        // if (displayFormat == "input") {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        // } else {
        //     return date.toDateString();
        // }
    }

    parse(value: any): Date | null {        
        if (typeof value == 'number') {
          return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
      }
 
    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    } 
 }