import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';
import { TestComponent } from './test/test.component';

import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'staff', component: StaffComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowComponent,
    TestComponent,
    StaffComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
