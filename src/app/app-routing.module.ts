import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { LandingComponent } from './landing/landing/landing.component';


const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

