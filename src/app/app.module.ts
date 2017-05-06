import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterializeModule} from "angular2-materialize";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {headerComponent} from './header/app.headerComponent';
import {contentAreaComponent} from "./contentArea/app.contentAreaComponent";
import {informationComponent} from "./information/app.informationComponent";
import {placesComponent} from "./places/app.placesComponent";


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    contentAreaComponent,
    informationComponent,
    placesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: informationComponent
      },
      {
        path: 'plaatsen',
        component: placesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
