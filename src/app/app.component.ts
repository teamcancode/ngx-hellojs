import { Component } from '@angular/core';
import { HellojsService } from './services/hellojs.service';
import { environment } from '../environments/environment';

declare const hello;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _hellojsService: HellojsService) {
    this._hellojsService.init({
      facebook: environment.facebookAppId,
    }, {
      scope: ['friends', 'email'],
      oauth_proxy: 'https://auth-server.herokuapp.com/proxy'
    });
  }

}
