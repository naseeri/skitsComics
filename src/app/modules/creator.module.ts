import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { EditorComponent } from '../components/editor/editor.component';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';

const creatorRoutes: Routes = [
  {path: 'editor', canDeactivate: [CanDeactivateGuardService], component: EditorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(creatorRoutes)
  ],
  exports: [
    EditorComponent
  ],
  declarations: [EditorComponent]
})
export class CreatorModule { }
