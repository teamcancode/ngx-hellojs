# TCC Ng5 Hellojs

This module is used for [Angular 5](https://angular.io/).  
This module help you to use [hellojs library](https://adodson.com/hello.js) as service.


How to use:
-------------
### Installation:
```
npm install ngx-hellojs
```

### Import library:
Edit .angular-cli.json
```
{
  //...
  "apps": [
    {
      //...
      "scripts": [
        //...
        "../node_modules/hellojs/dist/hello.all.min.js"
      ],
      //...
    }
  ],
  //...
}
```
    
### Import service:
Edit in `src/app/app.module.ts`:
```
//...
import { HellojsService } from 'ngx-hellojs';

@NgModule({
  //...
  providers: [
    //...
    HellojsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And call in component:
```
constructor(private _hellojsService: HellojsService) {
}
```

### Init library
```
this._hellojsService.init({
  facebook: '<your-app-id>',
});
 
//same with:
//hello.init({facebook: '<your-app-id>'});
```

### Login
```
this._hellojsService.login('facebook', {
  scope: 'friends, photos, publish'
}).subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').login({
//  scope: 'friends, photos, publish'
//}).then(function(data) {}, function(error) {});
```

### Logout
```
this._hellojsService.logout('facebook').subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').logout().then(function(data) {}, function(error) {});
```

### Get auth response
```
const fbResult = this._hellojsService.getAuthResponse('facebook');
 
//same with:
//var fbResult = hello('facebook').getAuthResponse();
```

### Call api
```
this._hellojsService.api('facebook', 'me').subscribe(data => {}, error => {});
 
//same with:
//hello('facebook').api('me').then(function(data) {}, function(error) {});
```

```
this._hellojsService.api('facebook', 'me/friends', null, {limit: 1}).subscribe(data => {
}, error => {
});
 
//same with:
//hello('facebook').api('me/friends', {limit: 1}).then(function(data) {
//}, function(error) {
//});
```

### On / Off
```
messageAfterLogin = () => {
    console.log('Login successfully');
}

this._hellojsService.on('auth.login', this.messageAfterLogin);
this._hellojsService.off('auth.login', this.messageAfterLogin);
 
//same with:
//var messageAfterLogin = function () {
//  console.log('Login successfully');
//};
//
//hello.on('auth.login', messageAfterLogin);
//hello.off('auth.login', messageAfterLogin);
```