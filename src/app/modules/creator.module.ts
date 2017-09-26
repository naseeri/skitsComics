import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from '../components/editor/editor.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

const creatorRoutes: Routes = [
  {path: 'editor', component: EditorComponent }
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
