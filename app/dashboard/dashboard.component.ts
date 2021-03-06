import { Component, OnInit } from '@angular/core';

import { Hero } from './../heroes/models/hero';

import { HeroService } from './../heroes/heroes-services/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './../app/dashboard/dashboard.component.html',
	styleUrls: ['./../app/dashboard/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
