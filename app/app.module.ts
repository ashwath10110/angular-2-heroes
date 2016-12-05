import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { HeroesComponent } from './heroes/heroes-component/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService } from './heroes/heroes-services/hero.service';
import { RouterModule } from '@angular/router';

RouterModule.forRoot([
	{
		path: 'heroes',
		component: HeroesComponent
	}
])

@NgModule({

	imports: [
		BrowserModule,
		FormsModule, RouterModule.forRoot([
			{
				path: 'heroes',
				component: HeroesComponent
			}, {
				path: 'dashboard',
				component: DashboardComponent
			}, {
				path: 'detail/:id',
				component: HeroDetailComponent
			}, {
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			}
		])
	],

	declarations: [
		AppComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroesComponent],

	providers: [
		HeroService
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
