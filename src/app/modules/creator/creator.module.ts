import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { EditorComponent } from './editor/editor.component';
import { CanDeactivateGuardService } from '../../services/can-deactivate-guard.service';
import { ComicsService } from '../../services/server/comics.service';

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
  providers: [ComicsService],
  exports: [
    EditorComponent
  ],
  declarations: [EditorComponent]
})
export class CreatorModule { }
