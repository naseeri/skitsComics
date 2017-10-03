import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { ExplorerModule } from './modules/explorer/explorer.module';
import { CreatorModule } from "./modules/creator/creator.module";

import { ComicService } from "./services/comic.service"
import { LoggingService } from "./services/logging.service";
import { AppComponent } from './app.component';

import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

const appRoutes: Routes = [
  {path: '', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'explorer', loadChildren: './modules/explorer/explorer.module#ExplorerModule'},
  {path: 'creator', canActivate: [AuthGuardService], loadChildren: './modules/creator/creator.module#CreatorModule'},
  {path: 'forms', loadChildren:'./modules/forms/forms.module#FormsModule'},
  {path: '**', redirectTo:'/'}
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
  providers: [ComicService, LoggingService, AuthGuardService, AuthService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
