import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  public heroes: Heroe[];
  public filter: string;
  constructor(private _heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['filter']) {
        this.filter = params['filter'];
      } else {
        delete this.filter;
      }
      if (this.filter && this.filter !== '') {
        this.heroes = this._heroesService.buscarHeroes(this.filter);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });
  }

  ngOnInit() {}
  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }
}
