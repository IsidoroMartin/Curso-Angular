import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { AuthService } from '../services/auth-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  /**
   * intercept all XHR request
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);
    if ( request.url.indexOf('cors-bridge') === -1 && this.authService.token) {
        request = request.clone({'headers':  request.headers.append('Authorization', `Bearer ${this.authService.token}`)});
    }
    return next.handle(request).pipe(
        catchError((error, caught) => {
            // intercept the respons error and displace it to the console
            this.handleAuthError(error, request);
            return of(error);
        }) as any);
  }


  private handleAuthError(err: HttpErrorResponse, request: HttpRequest<any>): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 401) {
        console.log(`Token ${this.authService.token} expirado, se procede a renovarlo`);
        this.authService.authenticate();
    }
    throw err;
  }
}
