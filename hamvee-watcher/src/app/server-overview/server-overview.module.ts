import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerOverviewComponent } from './server-overview.component';

@NgModule({
    declarations: [
      ServerOverviewComponent
    ],
    imports: [
      SharedModule,
      BrowserAnimationsModule,
    ],
  })
  export class ServerOverviewModule {
  }