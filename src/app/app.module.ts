import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerOverviewComponent } from './server-overview/server-overview.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTING } from './app-routing.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ServerOverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    APP_ROUTING,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
