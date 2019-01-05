import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private spotify: SpotifyService) {}
  setToken(token: string) {
      this.token = token;
      this.storage.set('token', this.token);
  }
  load() {
    return new Promise((resolve, reject) => {
      if (this.token == null) {
        const token = this.storage.get('token');
        if (token !== null) {
          this.token = token;
          resolve(true);
        } else {
            this.spotify.authenticate().subscribe((access_token: string) => {
              this.setToken(access_token);
              resolve(true);
           });
        }
      }
    });
  }
}
