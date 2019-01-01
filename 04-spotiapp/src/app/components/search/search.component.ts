import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artists: any[] = [];
  constructor(private spotify: SpotifyService) {

  }

  buscar(filter: string) {
    this.spotify.findArtist(filter)
    .subscribe((data: any) => {
      this.artists = data;
    });
    console.log(filter);
  }

}
