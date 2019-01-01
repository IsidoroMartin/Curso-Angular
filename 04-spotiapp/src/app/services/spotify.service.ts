import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers = new HttpHeaders({
    'Authorization': 'Bearer BQD0qnnnvP1o6-H9E0EGnbokH1sPmf2amxQdqATCsxy61zHoSghWM4ZpRw5RElxcFA2Y0a3CcxKfLxBVuKw',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {
    console.log('Spotify service ON');
  }
  getNewReleases() {
    const headers = this.headers;
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=ES&limit=20', {headers})
    .pipe(
      map(data => {
        return data['albums'].items;
      })
    );
  }
  findArtist(artist: string) {
    const headers = this.headers;
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers})
    .pipe(
      map(data => {
        return data['artists'].items;
      })
    );
  }
}
