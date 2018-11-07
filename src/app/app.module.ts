import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTING } from './app-routing.module';
import { MatInputModule, MatCheckboxModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SecurityGuard } from './shared/service/security/securityGuard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule.forRoot(),
    APP_ROUTING,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SecurityGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
