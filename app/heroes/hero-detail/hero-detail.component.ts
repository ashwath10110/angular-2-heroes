import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './../heroes-services/hero.service';
import { Hero } from './../models/hero';

@Component({
	moduleId: module.id,
	selector: 'hero-detail',
	templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

	heroes: Hero[] = [];
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	// @Input()
	// hero: Hero;

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);

		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));

			// this.hero = this.heroes[0];
	}

	goBack(): void {
		this.location.back();
	}

}