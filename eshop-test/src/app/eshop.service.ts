import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {urlMaps} from './app.config';

@Injectable()
export class EshopService {
  subject: Subject<any>;
  messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root.',
    httpGetUnknownError: 'Unknown error encountered while making http get request'
  };
  constructor(private httpClient: HttpClient) {
    this.subject = new Subject();
  }

  emit(id: string, options?: any) {
    this
      .subject
      .next({ id: id, data: options });
  };

  filterOn(id: string): Observable<any> {
    return (this.subject.filter(d => (d.id === id)));
  };

  httpGet(id: string) {
    try {
      let url = urlMaps[id];
      if (url) {
        this
          .httpClient
          .get(url)
          // .map(response => response.json())
          .subscribe(d => {
            this
              .subject
              .next({ id: id, data: d});
          }, err => {
            this
              .subject
              .next({ id: id, error: err });            
          });
      } else {
        this
          .subject
          .next({ id: id, error: this.messages.idNotMappedToUrl });

      }
    } catch (err) {
      this
        .subject
        .next({ id: id, error: this.messages.httpGetUnknownError });
    }
  };
}
