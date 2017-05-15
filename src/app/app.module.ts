import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {InformationComponent} from "./information/information.component";
import {PlacesComponent} from "./places/places.component";
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from "./news.service";
import { CreateNewsComponent } from './create-news/create-news.component';

const appRoutes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'plaatsen',
    component: PlacesComponent
  },
  {
    path: 'inloggen',
    component: LoginComponent
  }, {
    path: 'nieuws',
    component: NewsComponent
  }, {
    path: 'create-news',
    component: CreateNewsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InformationComponent,
    PlacesComponent,
    LoginComponent,
    NewsComponent,
    CreateNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
