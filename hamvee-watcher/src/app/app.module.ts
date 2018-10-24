import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/service/http.service';
import { ServerOverviewComponent } from './server-overview/server-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerOverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
