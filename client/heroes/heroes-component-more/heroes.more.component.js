"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("./../heroes-services/hero.service");
var hero_1 = require("./../models/hero");
var HeroesMoreComponent = (function () {
    function HeroesMoreComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.heroes = [];
    }
    HeroesMoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroesMoreComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroesMoreComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroesMoreComponent.prototype, "hero", void 0);
HeroesMoreComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'heroes-more',
        templateUrl: 'heroes.more.component.html',
        styleUrls: ['heroes.more.component.css'],
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroesMoreComponent);
exports.HeroesMoreComponent = HeroesMoreComponent;
//# sourceMappingURL=heroes.more.component.js.map