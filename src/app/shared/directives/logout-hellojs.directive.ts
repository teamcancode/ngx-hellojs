import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxHellojsResponseEntity } from '../entities/ngx-hellojs-response.entity';
import { NgxHellojsErrorEntity } from '../entities/ngx-hellojs-error.entity';
import { NgxHellojsService } from '../services/ngx-hellojs.service';

@Directive({
  selector: '[tccLogoutHellojs]'
})
export class LogoutHellojsDirective {

  @Input() tccLogoutHellojs: string;
  @Input() configs: {};

  @Output() successEvent: EventEmitter<NgxHellojsResponseEntity> = new EventEmitter<NgxHellojsResponseEntity>();
  @Output() errorEvent: EventEmitter<{ error: { code, message }, network }> = new EventEmitter<{ error: { code, message }, network }>();

  constructor(private _ngxZaloService: NgxHellojsService) {
  }

  @HostListener('click') onClick() {
    this._ngxZaloService.logout(this.tccLogoutHellojs, this.configs)
        .subscribe((response: NgxHellojsResponseEntity) => {
          this.successEvent.emit(response);
        }, (error: NgxHellojsErrorEntity) => {
          this.errorEvent.emit(error);
        });
  }

}
