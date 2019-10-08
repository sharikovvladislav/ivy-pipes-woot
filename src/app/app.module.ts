import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomePipe } from './some.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SomePipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [SomePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
