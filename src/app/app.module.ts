import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerOverviewComponent } from './server-overview/server-overview.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTING } from './app-routing.module';
import { MatCardModule } from '@angular/material';
import { ViewMatooiComponent } from './server-overview/view-matooi/view-matooi.component';
import { ViewImporterComponent } from './server-overview/view-importer/view-importer.component';
import { ViewItemtaskComponent } from './server-overview/view-itemtask/view-itemtask.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerOverviewComponent,
    ViewMatooiComponent,
    ViewImporterComponent,
    ViewItemtaskComponent
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
