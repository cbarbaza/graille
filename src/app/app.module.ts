import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing/landing.component';
import { InfoCardComponent } from './landing/landing/info-card/info-card.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ActualiteComponent } from './actualite/actualite.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoCardComponent,
    FooterComponent,
    TopMenuComponent,
    ActualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
