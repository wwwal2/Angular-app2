import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ServerComponent} from './server/server.component';
import { AutoComponent } from './auto/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
