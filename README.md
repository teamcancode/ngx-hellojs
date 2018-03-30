# Ngx Hellojs

This module is used for [Angular 5](https://angular.io/).  
This module help you to use [hellojs library](https://adodson.com/hello.js) as service.


How to use:
-------------
### Installation:
```html
npm install ngx-hellojs
```

### Import library:
Edit .angular-cli.json
```html
{
  //...
  "apps": [
    {
      //...
      "scripts": [
        //...
        "../node_modules/hellojs/dist/hello.all.js"
      ],
      //...
    }
  ],
  //...
}
```
    
### Import service:
Edit in `src/app/app.module.ts`:
```typescript
//...
import { NgxHellojsModule } from 'ngx-hellojs';

@NgModule({
  //...
  imports: [
    //...
    NgxHellojsModule.forRoot({
      facebook: <facebook-app-id>,
      google: <google-app-id>,
      windows: <windows-app-id>,
      twitter: <twitter-app-id>,
    }, {
      scope: 'friends, photos, publish'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//same with:
//hello.init({facebook: '<your-app-id>'}, {scope: 'friends, photos, publish'});
```

And call in component:
```typescript
import { NgxHellojsService } from 'ngx-zalo/dist/app/shared/services/ngx-hellojs.service';

constructor(private _ngxHellojsService: NgxHellojsService) {
}
```

### Login
```html
<!-- Using directive -->
<p ngxLoginHellojs="facebook"
   (successEvent)="loginSuccessfullyAction($event)"
   (errorEvent)="loginFailedAction($event)">Login facebook</p>
```

```typescript
this._ngxHellojsService
    .login('facebook', {scope: 'friends, photos, publish'})
    .subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').login({scope: 'friends, photos, publish'})
//                 .then(function(data) {}, function(error) {});
```

### Logout
```html
<!-- Using directive -->
<p ngxLogoutHellojs="facebook"
   (successEvent)="logoutSuccessfullyAction($event)"
   (errorEvent)="logoutFailedAction($event)">Logout</p>
```

```typescript
this._ngxHellojsService.logout('facebook')
                       .subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').logout()
//                 .then(function(data) {}, function(error) {});
```

### Get auth response
```typescript
const fbResult = this._ngxHellojsService.getAuthResponse('facebook');
 
//same with:
//var fbResult = hello('facebook').getAuthResponse();
```

### Call api
```typescript
this._ngxHellojsService.api('facebook', 'me')
                       .subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').api('me')
//                 .then(function(data) {}, function(error) {});
```

```typescript
this._ngxHellojsService.api('facebook', 'me/friends', null, {limit: 1})
                       .subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').api('me/friends', {limit: 1})
//                 .then(function(data) {}, function(error) {});
```

### On / Off
```typescript
messageAfterLogin = () => {
    console.log('Login successfully');
}

this._ngxHellojsService.on('auth.login', this.messageAfterLogin);
this._ngxHellojsService.off('auth.login', this.messageAfterLogin);
 
//same with:
//var messageAfterLogin = function () {
//  console.log('Login successfully');
//};
//
//hello.on('auth.login', messageAfterLogin);
//hello.off('auth.login', messageAfterLogin);
```
