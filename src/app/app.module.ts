import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTableModule } from '@angular/material'

import { AppComponent } from './app.component';
import { NetflixComponent } from './netflix/netflix.component';


@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
