import { Component } from '@angular/core';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';
import { NgxHellojsResponseEntity } from '../../shared/entities/ngx-hellojs-response.entity';
import { NgxHellojsErrorEntity } from '../../shared/entities/ngx-hellojs-error.entity';

@Component({
  selector: 'tcc-hello-facebook',
  templateUrl: './hello-facebook.component.html',
  styleUrls: ['./hello-facebook.component.scss']
})
export class HelloFacebookComponent {

  protected _network = 'facebook';
  loginSuccessfullyMessage = 'Login successfully';

  messageAfterLogin = () => {
    console.log(this.loginSuccessfullyMessage);
  };

  constructor(private _ngxHellojsService: NgxHellojsService) {
    this.initMessageAfterLogin();
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

  initMessageAfterLogin() {
    this._ngxHellojsService.on('auth.login', this.messageAfterLogin);
  }

  removeMessageAfterLogin() {
    this._ngxHellojsService.off('auth.login', this.messageAfterLogin);
  }

}
