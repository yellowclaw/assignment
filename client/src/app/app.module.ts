import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { OpportunitiesService } from './opportunities/opportunities.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    OpportunitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
