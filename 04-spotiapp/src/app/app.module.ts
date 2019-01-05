import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { AuthService } from './services/auth-service.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SpotifyService } from './services/spotify.service';

export function authProviderFactory(provider: AuthService) {
  return () => provider.load();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(ROUTES, { useHash : true})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: APP_INITIALIZER, useFactory: authProviderFactory, deps: [AuthService, SpotifyService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
