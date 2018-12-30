import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CustomCapitalizePipe } from './pipes/customcapitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent, CustomCapitalizePipe, DomseguroPipe, PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide : LOCALE_ID , useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
