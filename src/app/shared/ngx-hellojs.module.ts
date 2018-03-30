import { ModuleWithProviders, NgModule } from '@angular/core';
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

  static forRoot(credentials: {}, options: {}): ModuleWithProviders {
    return {
      ngModule: NgxHellojsModule,
      providers: [
        {provide: 'hellojsCredentials', useValue: credentials},
        {provide: 'hellojsOptions', useValue: options}
      ]
    };
  }

}
