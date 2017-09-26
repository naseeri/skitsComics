import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { ExplorerModule } from './explorer.module';
import { CreatorModule } from "./creator.module";

import { ComicService } from "../services/comic.service"
import { LoggingService } from "../services/logging.service";
import { AppComponent } from '../components/app/app.component';

const appRoutes: Routes = [
  {path: '', loadChildren: './home.module#HomeModule'},
  {path: 'explorer', loadChildren: './explorer.module#ExplorerModule'},
  {path: 'creator', loadChildren: './creator.module#CreatorModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ExplorerModule,
    CreatorModule
  ],
  providers: [ComicService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
