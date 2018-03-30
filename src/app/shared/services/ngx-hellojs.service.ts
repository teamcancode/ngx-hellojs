import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgxHellojsResponseEntity } from '../entities/ngx-hellojs-response.entity';
import { NgxHellojsErrorEntity } from '../entities/ngx-hellojs-error.entity';

declare const hello;

@Injectable()
export class NgxHellojsService {

  constructor(
    @Inject('hellojsCredentials') private _credentials: {},
    @Inject('hellojsOptions') private _options: {}
  ) {
    this.init(this._credentials, this._options);
  }

  // noinspection JSMethodCanBeStatic
  init(credentials: {}, options?: {}) {
    hello.init(credentials, options);
  }

  // noinspection JSMethodCanBeStatic
  getAuthResponse(network: string): Object {
    return hello(network).getAuthResponse();
  }

  login(network: string, options?: {}): Observable<NgxHellojsResponseEntity> {
    return new Observable(observer => {
      hello(network).login(options).then(data => {
        const response = new NgxHellojsResponseEntity(data);
        observer.next(response);
        observer.complete();
      }, error => {
        const response = new NgxHellojsErrorEntity(error);
        observer.error(response);
      });
    });
  }

  logout(network: string, options?: {}): Observable<NgxHellojsResponseEntity> {
    return new Observable(observer => {
      hello(network).logout(options).then(data => {
        const response = new NgxHellojsResponseEntity(data);
        observer.next(response);
        observer.complete();
      }, error => {
        const response = new NgxHellojsErrorEntity(error);
        observer.error(response);
      });
    });
  }

  api(network: string, path: string, method?: string, configs?: Object): Observable<{}> {
    return new Observable(observer => {
      hello(network).api(path, method, configs).then(data => {
        observer.next(data);
        observer.complete();
      }, error => {
        const response = new NgxHellojsErrorEntity(error);
        observer.error(response);
      });
    });
  }

  // noinspection JSMethodCanBeStatic
  on(event, callback) {
    hello.on(event, callback);
  }

  // noinspection JSMethodCanBeStatic
  off(event, callback) {
    hello.off(event, callback);
  }

}
