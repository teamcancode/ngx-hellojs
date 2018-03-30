import { Component, OnInit } from '@angular/core';
import { BaseHelloComponent } from '../base/base-hello.component';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';

@Component({
  selector: 'tcc-hello-twitter',
  templateUrl: './hello-twitter.component.html',
  styleUrls: ['./hello-twitter.component.scss']
})
export class HelloTwitterComponent extends BaseHelloComponent {

  // noinspection JSUnusedGlobalSymbols
  protected _network = 'twitter';

  constructor(ngxHellojsService: NgxHellojsService) {
    super(ngxHellojsService);
  }

}
