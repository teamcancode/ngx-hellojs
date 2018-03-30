import { NgxHellojsBaseEntity } from './ngx-hellojs-base.entity';

export class NgxHellojsResponseEntity extends NgxHellojsBaseEntity {

  private _network: string;
  private _authResponse: {};

  get network(): string {
    return this._network;
  }

  set network(value: string) {
    this._network = value;
  }

  get authResponse(): {} {
    return this._authResponse;
  }

  set authResponse(value: {}) {
    this._authResponse = value;
  }

}
