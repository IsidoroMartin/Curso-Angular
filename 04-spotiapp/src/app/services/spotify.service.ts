import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'BQDnv-_pXBtOUs_oby0fD1JqfX6fh7IR-cpdJ5BK65NPNFTmGe89zv3ZnCGjBJdTQtCIXQt31KgLp0iFmBo';
  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
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
  findArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
    .pipe(
      map(data => data['artists'].items)
    );
  }
}
