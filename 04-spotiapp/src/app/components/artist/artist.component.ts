import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist: any;
  tracks: any[];
  loading = true;
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
      this.activatedRoute.params.subscribe(params => {
      spotifyService.findArtist(params['id'])
        .subscribe(artist => {
          this.artist = artist;
          this.loading = false;
        });
      this.spotifyService.getTopTracks(params['id'])
        .subscribe(topTracks => {
          this.tracks = topTracks;
          console.log(topTracks);
        });
    });
  }
}
