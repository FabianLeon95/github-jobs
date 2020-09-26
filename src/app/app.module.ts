import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JobComponent } from './pages/job/job.component';
import { JobItemComponent } from './components/job-item/job-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobComponent,
    JobItemComponent,
    PaginationComponent,
    JobListComponent,
    SearchBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
