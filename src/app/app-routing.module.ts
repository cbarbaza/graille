import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { FAQComponent } from './faq/faq.component';
import { LandingComponent } from './landing/landing.component';
import { NosValeursComponent } from './nos-valeurs/nos-valeurs.component';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AdminFAQComponent } from './admin/admin-faq/admin-faq.component';
import { AdminPartnerComponent } from './admin/admin-partner/admin-partner.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LaCuisineComponent } from './la-cuisine/la-cuisine.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['admin/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin/home']);


const adminChildren = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToItems),
  },
  {
    path: 'home',
    component: AdminFAQComponent, // redirect to other page while creating admin/home
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'faq',
    component: AdminFAQComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'partners',
    component: AdminPartnerComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: '**', redirectTo: '/admin/home' },
];

const routes: Routes = [
  { path:  'admin', component: AdminComponent, children: adminChildren },
  { path: 'nos-valeurs', component: NosValeursComponent },
  { path: 'actualite/:slug', component: ActualiteComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'deroule-de-la-cuisine', component: LaCuisineComponent },
  { path: 'faq', component: FAQComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

