import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './../heroes-services/hero.service';
import { Hero } from './../models/hero';

@Component({
	moduleId: module.id,
	selector: 'heroes-more',
	templateUrl: 'heroes.more.component.html',
	styleUrls: ['heroes.more.component.css'],
	providers: [HeroService]
})
export class HeroesMoreComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	@Input()
	hero: Hero;

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}
}


