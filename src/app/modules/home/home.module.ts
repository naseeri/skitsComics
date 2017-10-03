import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';


const homeRoutes: Routes = [
  {path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [WelcomeComponent]
})
export class HomeModule { }
