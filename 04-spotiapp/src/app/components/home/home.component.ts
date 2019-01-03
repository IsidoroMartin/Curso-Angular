import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  releases: any[] = [];
  error: boolean;
  mensajeError: string;
  loading = true;
  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.releases = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = error.error.error.message;
      });
  }
}
