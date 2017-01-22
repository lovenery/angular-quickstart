import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>AppComponent</h1>
    <hr>
    <ul>
      <li><a routerLink="/">Home</a></li>
       <li><a routerLink="/about">About</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  // <user></user>
})
export class AppComponent  { }
