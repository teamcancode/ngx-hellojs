import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloFacebookComponent } from './components/hello-facebook/hello-facebook.component';
import { AppComponent } from './app.component';
import { NgxHellojsModule } from './shared/ngx-hellojs.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HelloFacebookComponent,
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
