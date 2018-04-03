import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHellojsDirective } from './directives/login-hellojs.directive';
import { LogoutHellojsDirective } from './directives/logout-hellojs.directive';
import { NgxHellojsService } from './services/ngx-hellojs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgxHellojsService,
  ],
  declarations: [
    LoginHellojsDirective,
    LogoutHellojsDirective
  ],
  exports: [
    LoginHellojsDirective,
    LogoutHellojsDirective
  ]
})
export class NgxHellojsModule {
}
