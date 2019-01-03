import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=ES&limit=20')
    .pipe(
      map(data => {
        return data['albums'].items;
      })
    );
  }
  searchArtists(artist: string) {
    return this.getQuery(`search?q=${encodeURI(artist)}&type=artist&limit=15`)
    .pipe(
      map(data => data['artists'].items)
    );
  }
  findArtist(id: string) {
    return this.getQuery(`artists/${encodeURI(id)}`);
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${encodeURI(id)}/top-tracks?country=us`)
      .pipe(
        map(data => data['tracks'])
      );
  }

}
