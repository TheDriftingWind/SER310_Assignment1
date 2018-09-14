import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
