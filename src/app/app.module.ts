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
    NgxHellojsModule.forRoot({
      facebook: environment.credentials.facebook,
      google: environment.credentials.google,
      windows: environment.credentials.windows,
      twitter: environment.credentials.twitter,
    }, {
      scope: ['friends', 'email']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
