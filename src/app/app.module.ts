import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerOverviewComponent } from './server-overview/server-overview.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTING } from './app-routing.module';
import { MatCardModule, MatExpansionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { ViewMatooiComponent } from './server-overview/view-matooi/view-matooi.component';
import { ViewImporterComponent } from './server-overview/view-importer/view-importer.component';
import { ViewItemtaskComponent } from './server-overview/view-itemtask/view-itemtask.component';
import { StatusCalculatorService } from './server-overview/service/statusCalculator.service';
import { ServiceStatusColorDirective } from './server-overview/directive/serviceStatusColor.directive';
import { LoginComponent } from './login/login.component';
import { SecurityGuard } from './shared/service/security/securityGuard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerOverviewComponent,
    ViewMatooiComponent,
    ViewImporterComponent,
    ViewItemtaskComponent,
    ServiceStatusColorDirective,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    APP_ROUTING,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusCalculatorService,
    SecurityGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
