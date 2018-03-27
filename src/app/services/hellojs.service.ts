import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

declare const hello;

@Injectable()
export class HellojsService {

  // noinspection JSMethodCanBeStatic
  init(configs: {}) {
    hello.init(configs);
  }

  // noinspection JSMethodCanBeStatic
  getAuthResponse(network: string): Object {
    return hello(network).getAuthResponse();
  }

  login(network: string, options?: {}): Observable<{ network, authResponse }> {
    return new Observable(observer => {
      hello(network).login(options).then((data: { network, authResponse }) => {
        observer.next(data);
        observer.complete();
      }, (error: { error: { code, message }, network }) => {
        observer.error(error);
      });
    });
  }

  logout(network: string, options?: {}): Observable<{ network }> {
    return new Observable(observer => {
      hello(network).logout(options).then((data: { network }) => {
        observer.next(data);
        observer.complete();
      }, (error: { error: { code, message }, network }) => {
        observer.error(error);
      });
    });
  }

  api(network: string, path: string, method?: string, configs?: Object): Observable<{ Object }> {
    return new Observable(observer => {
      hello(network).api(path, method, configs).then((data: any) => {
        observer.next(data);
        observer.complete();
      }, (error: { error: { error: { code, message }, network }, network }) => {
        observer.error(error);
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
