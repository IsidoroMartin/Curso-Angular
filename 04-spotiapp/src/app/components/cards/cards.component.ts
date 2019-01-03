import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) { }

  loadArtist(item: any) {
    const artistId = ((item.type === 'artist') ? item.id : item.artists[0].id);
    this.router.navigate(['artist', artistId]);
  }
}
