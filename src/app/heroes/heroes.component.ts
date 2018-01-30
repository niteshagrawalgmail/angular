import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { CalculatorService } from 'angularcalculatorlibrary';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  sum: number;

  constructor(private heroService: HeroService, private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.getHeroes();
    this.sum = this.calculatorService.add(4, 5);
  }

  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

}
