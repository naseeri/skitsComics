import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewerComponent } from './viewer/viewer.component';
import { ComicBoxComponent } from './viewer/comic-box/comic-box.component';
import { ZoomDirective } from '../../directives/zoom.directive';
import { StarWordPipe } from '../../pipes/star-word.pipe';
import { SortListPipe } from '../../pipes/sort-list.pipe';
import { ComicsService } from '../../services/server/comics.service';

const explorerRoutes: Routes = [
  {path: 'viewer', component: ViewerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(explorerRoutes)
  ],
  providers: [ComicsService],
  exports: [
    ViewerComponent
  ],
  declarations: [
    ViewerComponent,
    ComicBoxComponent,
    ZoomDirective,
    StarWordPipe,
    SortListPipe
  ]
})
export class ExplorerModule { }
