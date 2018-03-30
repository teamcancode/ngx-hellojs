import { NgxHellojsResponseEntity } from '../../shared/entities/ngx-hellojs-response.entity';
import { NgxHellojsErrorEntity } from '../../shared/entities/ngx-hellojs-error.entity';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';

export abstract class BaseHelloComponent {

  protected _network = '';

  constructor(protected _ngxHellojsService: NgxHellojsService) {
  }

  // noinspection JSMethodCanBeStatic
  loginSuccessfullyAction(response: NgxHellojsResponseEntity) {
    console.log('Login successfully:', response);
  }

  // noinspection JSMethodCanBeStatic
  loginFailedAction(error: NgxHellojsErrorEntity) {
    console.log('Login failed:', error);
  }

  // noinspection JSMethodCanBeStatic
  logoutSuccessfullyAction(response: NgxHellojsResponseEntity) {
    console.log('Logout successfully:', response);
  }

  // noinspection JSMethodCanBeStatic
  logoutFailedAction(error: NgxHellojsErrorEntity) {
    console.log('Logout failed:', error);
  }

  getAuthResponse() {
    const result = this._ngxHellojsService.getAuthResponse(this._network);
    console.log(result);
  }

  getMyInfo() {
    this._ngxHellojsService.api(this._network, 'me').subscribe(data => {
      console.log('My info:', data);
    }, (error) => {
      console.log('My info error:', error);
    });
  }

  getFriendList() {
    this._ngxHellojsService.api(this._network, 'me/friends', null, {limit: 1}).subscribe((data) => {
      console.log('Friend list:', data);
    }, (error) => {
      console.log('Friend list error:', error);
    });
  }

}
