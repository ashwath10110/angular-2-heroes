import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../models/hero';
import { HeroService } from './../heroes-services/hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './../app/heroes/heroes-component/heroes.component.html',
	styleUrls: ['./../app/heroes/heroes-component/heroes.component.css'],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}


