import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing/landing.component';
import { InfoCardComponent } from './landing/landing/info-card/info-card.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PartnerCardComponent } from './landing/landing/partner-card/partner-card.component';
import { VimeoComponent } from './shared/vimeo/vimeo.component';
import { VimeoItemComponent } from './actualite/vimeo-item/vimeo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoCardComponent,
    FooterComponent,
    TopMenuComponent,
    ActualiteComponent,
    PartnerCardComponent,
    VimeoComponent,
    VimeoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
