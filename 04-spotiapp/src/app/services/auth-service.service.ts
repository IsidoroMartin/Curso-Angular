import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  token: string;

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService, private spotify: SpotifyService) {
    console.log('object');
    if (this.token == null) {
        const token = this.storage.get('token');
        if (token !== null) {
          this.token = token;
        } else {
            this.authenticate();
        }
      }
  }

  authenticate() {
    const url = 'https://apache-server.dynu.net/repository/github/PHP/SocialMedia/rest/cors-bridge';
    const req = {
      target : 'https://accounts.spotify.com/api/token',
      body: 'grant_type=client_credentials',
      method: 'POST',
      headers : {
        'Authorization': 'Basic YmI5ODcxY2VhODJiNDU2MzgwNzhiNzQ3OTM2OGZjMDk6ZWVlMGY0YTQ3ZjU0NDBhZGIzYzIzY2VmMWMxODFhNGQ=',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.post(url, req)
    .pipe(
      map(data => data['access_token'])
        ).subscribe((access_token: string) => {
          this.token = access_token;
          this.storage.set('token', this.token);
      });
  }
}
