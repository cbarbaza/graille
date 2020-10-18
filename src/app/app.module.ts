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
import { PhotoItemComponent } from './actualite/photo-item/photo-item.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { NosValeursComponent } from './nos-valeurs/nos-valeurs.component';

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
    VimeoItemComponent,
    PhotoItemComponent,
    NosValeursComponent,
  ],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsId),
    NgxGoogleAnalyticsRouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
