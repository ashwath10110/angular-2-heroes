import { Component } from '@angular/core';
import { NavbarComponent } from './../navbar/navbar.component';

@Component({
  moduleId:module.id,
	selector: 'my-app',
	template: `
  <navbar></navbar>
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
	styleUrls: ['app.component.css'],
})

export class AppComponent {
	title = 'Tour of Heroes';
}
