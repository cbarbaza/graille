import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VimeoComponent } from './shared/vimeo/vimeo.component';
import { VimeoItemComponent } from './actualite/vimeo-item/vimeo-item.component';
import { PhotoItemComponent } from './actualite/photo-item/photo-item.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { NosValeursComponent } from './nos-valeurs/nos-valeurs.component';
import { FAQComponent } from './faq/faq.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import { PartnerCardComponent } from './shared/partner-card/partner-card.component';
import { LandingComponent } from './landing/landing.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';

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
    FAQComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsId),
    NgxGoogleAnalyticsRouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
