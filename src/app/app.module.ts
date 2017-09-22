import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome/welcome.component';

import { ExplorerModule } from './explorer/explorer.module';
import { CreatorModule } from "./creator/creator.module";

import { ComicService } from "./services/comic.service"
import { LoggingService } from "./services/logging.service";

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    ExplorerModule,
    CreatorModule
  ],
  providers: [ComicService, LoggingService],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
