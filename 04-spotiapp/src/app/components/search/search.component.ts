import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {

  }

  buscar(filter: string) {
    this.loading = true;
    this.spotify.searchArtists(filter)
    .subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
    console.log(filter);
  }

}
