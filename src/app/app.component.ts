import { HeroService } from './hero.service';
import { strictEqual } from 'assert';
import { SuiteNumberingProcessor } from 'jasmine-spec-reporter/built/processors/suite-numbering-processor';
import { Component } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tour of Heroes';
  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
