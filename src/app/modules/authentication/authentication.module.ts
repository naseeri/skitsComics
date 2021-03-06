import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthentService } from '../../services/server/authent.service';

const creatorRoutes: Routes = [
  {path: 'signup', component: SignUpComponent },
  {path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(creatorRoutes)
  ],
  providers: [AuthentService],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthenticationModule { }
