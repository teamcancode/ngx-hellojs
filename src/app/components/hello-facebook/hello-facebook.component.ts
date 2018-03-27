import { Component } from '@angular/core';
import { HellojsService } from '../../services/hellojs.service';

@Component({
  selector: 'app-hello-facebook',
  templateUrl: './hello-facebook.component.html',
  styleUrls: ['./hello-facebook.component.scss']
})
export class HelloFacebookComponent {

  loginSuccessfullyMessage = 'Login successfully';

  messageAfterLogin = () => {
    console.log(this.loginSuccessfullyMessage);
  };

  constructor(private _hellojsService: HellojsService) {
    this.initMessageAfterLogin();
  }

  login() {
    this._hellojsService.login('facebook', {
      scope: 'friends, photos, publish',
    }).subscribe((data) => {
      console.log('data', data);
    }, (error) => {
      console.log('error', error);
    });
  }

  logout() {
    this._hellojsService.logout('facebook').subscribe((data) => {
      console.log('data', data);
    }, (error) => {
      console.log('error', error);
    });
  }

  getAuthResponse() {
    const result = this._hellojsService.getAuthResponse('facebook');

    console.log(result);
  }

  getMyInfo() {
    this._hellojsService.api('facebook', 'me').subscribe((data) => {
      console.log('data', data);
    }, (error) => {
      console.log('error', error);
    });
  }

  getFriendList() {
    this._hellojsService.api('facebook', 'me/friends', null, {limit: 1}).subscribe((data) => {
      console.log('data', data);
    }, (error) => {
      console.log('error', error);
    });
  }

  initMessageAfterLogin() {
    this._hellojsService.on('auth.login', this.messageAfterLogin);
  }

  removeMessageAfterLogin() {
    this._hellojsService.off('auth.login', this.messageAfterLogin);
  }

}
