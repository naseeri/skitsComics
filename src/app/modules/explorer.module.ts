import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewerComponent } from '../components/viewer/viewer.component';
import { ComicBoxComponent } from '../components/comic-box/comic-box.component';
import { ZoomDirective } from '../directives/zoom.directive';

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
    ZoomDirective
  ]
})
export class ExplorerModule { }
