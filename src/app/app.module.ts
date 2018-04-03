import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloFacebookComponent } from './components/hello-facebook/hello-facebook.component';
import { AppComponent } from './app.component';
import { NgxHellojsModule } from './shared/ngx-hellojs.module';
import { environment } from '../environments/environment';
import { HelloGoogleComponent } from './components/hello-google/hello-google.component';
import { OtherComponent } from './components/other/other.component';
import { HelloWindowsComponent } from './components/hello-windows/hello-windows.component';
import { HelloTwitterComponent } from './components/hello-twitter/hello-twitter.component';
import { NgxHellojsService } from './shared/services/ngx-hellojs.service';

const helloJSCredentials = {
  facebook: environment.credentials.facebook,
  google: environment.credentials.google,
  windows: environment.credentials.windows,
  twitter: environment.credentials.twitter,
};

const helloJsOptions = {
  scope: ['friends', 'email']
};

@NgModule({
  declarations: [
    AppComponent,
    HelloFacebookComponent,
    HelloGoogleComponent,
    HelloWindowsComponent,
    OtherComponent,
    HelloTwitterComponent,
  ],
  imports: [
    BrowserModule,
    NgxHellojsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngxHellojsService: NgxHellojsService) {
    ngxHellojsService.init(helloJSCredentials, helloJsOptions);
  }

}
