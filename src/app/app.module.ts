import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome/welcome.component';

import { ExplorerModule } from './explorer/explorer.module';
import { CreatorModule } from "./creator/creator.module";

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    ExplorerModule,
    CreatorModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
