import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule ],

  declarations: [ AppComponent, HelloComponent ], 

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
