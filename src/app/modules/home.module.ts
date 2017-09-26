import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome/welcome.component';


const creatorRoutes: Routes = [
  {path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(creatorRoutes)
  ],
  declarations: [WelcomeComponent]
})
export class HomeModule { }
