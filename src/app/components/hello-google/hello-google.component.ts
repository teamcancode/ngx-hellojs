import { Component } from '@angular/core';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';
import { BaseHelloComponent } from '../base/base-hello.component';

@Component({
  selector: 'ngx-hello-google',
  templateUrl: './hello-google.component.html',
  styleUrls: ['./hello-google.component.scss']
})
export class HelloGoogleComponent extends BaseHelloComponent {

  // noinspection JSUnusedGlobalSymbols
  protected _network = 'google';

  constructor(ngxHellojsService: NgxHellojsService) {
    super(ngxHellojsService);
  }

}
