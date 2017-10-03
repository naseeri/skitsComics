import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule as FM } from '@angular/forms';

import { EmailFormComponent } from './email-form/email-form.component';

const formsRoutes: Routes = [
  {path: 'email', component: EmailFormComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FM,
    RouterModule.forChild(formsRoutes)
  ],
  declarations: [EmailFormComponent]
})
export class FormsModule { }
