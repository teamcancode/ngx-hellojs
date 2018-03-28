import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HellojsService } from './services/hellojs.service';
import { HelloFacebookComponent } from './components/hello-facebook/hello-facebook.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloFacebookComponent
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
