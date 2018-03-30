import { Component } from '@angular/core';
import { NgxHellojsService } from '../../shared/services/ngx-hellojs.service';
import { BaseHelloComponent } from '../base/base-hello.component';

@Component({
  selector: 'tcc-hello-windows',
  templateUrl: './hello-windows.component.html',
  styleUrls: ['./hello-windows.component.scss']
})
export class HelloWindowsComponent extends BaseHelloComponent {

  // noinspection JSUnusedGlobalSymbols
  protected _network = 'windows';

  constructor(ngxHellojsService: NgxHellojsService) {
    super(ngxHellojsService);
  }

}
