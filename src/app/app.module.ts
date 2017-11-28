import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekSwitcherComponent } from './week-switcher/week-switcher.component';
import { WeekViewComponent } from './week-view/week-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekSwitcherComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
