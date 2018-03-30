import { NgxHellojsBaseEntity } from './ngx-hellojs-base.entity';

export class NgxHellojsErrorEntity extends NgxHellojsBaseEntity {

  private _network: string;
  private _error: { code, message };

  get network(): string {
    return this._network;
  }

  set network(value: string) {
    this._network = value;
  }

  get error(): { code; message } {
    return this._error;
  }

  set error(value: { code; message }) {
    this._error = value;
  }

}
