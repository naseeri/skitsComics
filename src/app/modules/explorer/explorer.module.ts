import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewerComponent } from './viewer/viewer.component';
import { ComicBoxComponent } from './viewer/comic-box/comic-box.component';
import { ZoomDirective } from '../../directives/zoom.directive';
import { StarWordPipe } from '../../pipes/star-word.pipe';

const explorerRoutes: Routes = [
  {path: 'viewer', component: ViewerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(explorerRoutes)
  ],
  exports: [
    ViewerComponent
  ],
  declarations: [
    ViewerComponent,
    ComicBoxComponent,
    ZoomDirective,
    StarWordPipe
  ]
})
export class ExplorerModule { }
