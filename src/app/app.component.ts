import { Component } from '@angular/core';
import { HellojsService } from './services/hellojs.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginSuccessfullyMessage = 'Login successfully';

  messageAfterLogin = () => {
    console.log(this.loginSuccessfullyMessage);
  };

  constructor(private _hellojsService: HellojsService) {
    this._hellojsService.init({
      facebook: environment.facebookAppId,
    });

    this.initMessageAfterLogin();
  }

  login() {
    this._hellojsService.login('facebook', {
      scope: 'friends, photos, publish'
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
