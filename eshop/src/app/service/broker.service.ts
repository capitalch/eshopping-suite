import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { urlMaps } from '../../assets/options';

@Injectable()
export class BrokerService {
  subject: Subject<any>;
  messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root.',
    httpGetUnknownError: 'Unknown error encountered while making http get request'
  };

  getHttpUrl = (id) => {
    let host = urlMaps.host.replace(/\/$/, "");
    let url = urlMaps[id];
    url && (url = url.replace(/^,/, ''));
    url = host.concat('/', url);
    return (url);
  }

  constructor(private httpClient: HttpClient) {

    httpClient
      .get('assets/settings.json')
      .subscribe(d => {
        console.log(d);
      }, err => {
        console.log(err);
      });

    // console.log(this.getHttpUrl('post:query:generic'));
  }



  emit(id: string, options?: any) {
    this
      .subject
      .next({ id: id, data: options });
  };

  filterOn(id: string): Observable<any> {
    return (this.subject.filter(d => (d.id === id)));
  };

  httpPost(id: string, body?: any, queryParams?: {}, carryBag?: any) {
    let url = this.getHttpUrl(id);// urlMaps[id];
    body = body || {};
    body && (body.id = id);
    if (queryParams) {
      let httpParams = new HttpParams();
      httpParams = Object
        .keys(queryParams)
        .reduce((prev, x, i) => {
          httpParams = httpParams.append(x, queryParams[x]);
          return (httpParams);
        }, httpParams);
      queryParams = httpParams;
    }
    this
      .httpClient
      .post(url, body, { params: queryParams })
      .subscribe(d => {
        this
          .subject
          .next({ id: id, data: d, body: body, carryBag: carryBag });
      }, err => {
        this
          .subject
          .next({ id: id, error: err });
      });
  };

  httpGet(id: string, queryParams?: {}) {
    try {
      let url = this.getHttpUrl(id);// urlMaps[id];
      let httpParams = new HttpParams();
      httpParams = queryParams && (Object.keys(queryParams).reduce((prevValue, x, i) => {
        httpParams = httpParams.append(x, queryParams[x]);
        return (httpParams);
      }, httpParams));
      if (url) {
        this
          .httpClient
          .get(url, { params: httpParams })
          .subscribe(d => {
            this
              .subject
              .next({ id: id, data: d });
          }, err => {
            this.subject.next({ id: id, error: err });
          });
      } else {
        this
          .subject
          .next({ id: id, error: this.messages.idNotMappedToUrl })
      }
    } catch (err) {
      this
        .subject
        .next({ id: id, error: this.messages.httpGetUnknownError })
    }
  }
}
