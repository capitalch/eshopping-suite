import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';

// const moment = _rollupMoment || _moment;

export class MyMomentDateAdapter extends MomentDateAdapter {

    // parse(value: any, parseFormat: string | string[]): Moment | null {
    //     if (value && typeof value == 'string') {
    //         return moment(value, parseFormat, this.locale);
    //     }
    //     return value ? moment(value).locale(this.locale) : null;
    // }

    format(date: Moment, displayFormat: string): string {
        // date = this.clone(date);
        // if (!this.isValid(date)) {
        //     throw Error('MomentDateAdapter: Cannot format invalid date.');
        // }
        // return date.format(displayFormat);
        return(date.format('dd/MM/yyyy'))
    }

}