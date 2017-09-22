import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerComponent } from './viewer/viewer.component';
import { ComicBoxComponent } from './viewer/comic-box/comic-box.component';
import { ZoomDirective } from '../directives/zoom.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewerComponent
  ],
  declarations: [
    ViewerComponent,
    ComicBoxComponent,
    ZoomDirective
  ]
})
export class ExplorerModule { }
