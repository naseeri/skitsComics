import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from './components/editor/editor.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { PlainComponent } from './components/plain/plain.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule
  ],
  exports: [
    PlainComponent, EditorComponent
  ],
  declarations: [PlainComponent, EditorComponent]
})
export class CreatorModule { }
