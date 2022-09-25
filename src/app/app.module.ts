import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptTips1Component } from './typescript-tips1/typescript-tips1.component';
import { TypescriptTips2Component } from './typescript-tips2/typescript-tips2.component';
import { TypeBestPracticeComponent } from './type-best-practice/type-best-practice.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptTips1Component,
    TypescriptTips2Component,
    TypeBestPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
