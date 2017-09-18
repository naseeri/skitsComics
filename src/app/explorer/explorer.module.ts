import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerComponent } from './components/viewer/viewer.component';
import { ComicBoxComponent } from './components/comic-box/comic-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewerComponent
  ],
  declarations: [
    ViewerComponent,
    ComicBoxComponent
  ]
})
export class ExplorerModule { }
