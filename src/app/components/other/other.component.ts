import { Component } from '@angular/core';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';

@Component({
  selector: 'tcc-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

  loginSuccessfullyMessage = 'Login successfully';

  messageAfterLogin = () => {
    console.log(this.loginSuccessfullyMessage);
  };

  constructor(private _ngxHellojsService: NgxHellojsService) {
  }

  initMessageAfterLogin() {
    this._ngxHellojsService.on('auth.login', this.messageAfterLogin);
  }

  removeMessageAfterLogin() {
    this._ngxHellojsService.off('auth.login', this.messageAfterLogin);
  }

}
