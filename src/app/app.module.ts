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
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { LoginComponent } from './admin/login/login.component';

import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';
import { ConfirmationDialogComponent } from './shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminFAQComponent } from './admin/admin-faq/admin-faq.component';
import { AdminPartnerComponent } from './admin/admin-partner/admin-partner.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PartnerFormComponent } from './admin/admin-partner/partner-form/partner-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FAQFormComponent } from './admin/admin-faq/faqform/faqform.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from 'ngx-sharebuttons';
import { ShareButtonsComponent } from './shared/share-buttons/share-buttons.component';
import { LaCuisineComponent } from './la-cuisine/la-cuisine.component';
import { CuisineCardComponent } from './shared/cuisine-card/cuisine-card.component';
import { OrderModule } from 'ngx-order-pipe';

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
    ConfirmationDialogComponent,
    AdminComponent,
    AdminFAQComponent,
    AdminPartnerComponent,
    AdminHomeComponent,
    PartnerFormComponent,
    FAQFormComponent,
    ShareButtonsComponent,
    LaCuisineComponent,
    CuisineCardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsId),
    NgxGoogleAnalyticsRouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      autoFocus: true,
    }}),
    AngularEditorModule,
    HttpClientModule,
    GalleryModule,
    ShareModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
