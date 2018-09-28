import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';
import { TestComponent } from './test/test.component';

import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowComponent,
    TestComponent,
    StaffComponent,
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
