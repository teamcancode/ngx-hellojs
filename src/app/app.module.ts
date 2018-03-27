import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HellojsService } from './services/hellojs.service';
import { HelloFacebookComponent } from './components/hello-facebook/hello-facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloFacebookComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HellojsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
