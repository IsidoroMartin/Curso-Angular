import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  public heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroService.getHeroe(params['id']);
        console.log(this.heroe);
    });
  }


}
