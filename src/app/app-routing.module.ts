import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { LoginComponent } from './admin/login/login.component';
import { FAQComponent } from './faq/faq.component';
import { LandingComponent } from './landing/landing.component';
import { NosValeursComponent } from './nos-valeurs/nos-valeurs.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'nos-valeurs', component: NosValeursComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'faq', component: FAQComponent },
  { path:  'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

