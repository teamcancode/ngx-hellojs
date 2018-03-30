import { Component } from '@angular/core';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';
import { BaseHelloComponent } from '../base/base-hello.component';

@Component({
  selector: 'ngx-hello-facebook',
  templateUrl: './hello-facebook.component.html',
  styleUrls: ['./hello-facebook.component.scss']
})
export class HelloFacebookComponent extends BaseHelloComponent {

  // noinspection JSUnusedGlobalSymbols
  protected _network = 'facebook';

  constructor(ngxHellojsService: NgxHellojsService) {
    super(ngxHellojsService);
  }

}
