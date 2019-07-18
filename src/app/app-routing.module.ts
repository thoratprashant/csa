import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './shared/components/auth/sign-in/sign-in.component';
import { LandingComponent } from './views/landing/landing.component';



const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


