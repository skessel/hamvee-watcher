import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServerOverviewComponent } from './server-overview.component';
import { ViewMatooiComponent } from './view-matooi/view-matooi.component';
import { SERVER_OVERVIEW_ROUTING } from './server-overview-routing.module';
import { ViewImporterComponent } from './view-importer/view-importer.component';
import { ViewItemtaskComponent } from './view-itemtask/view-itemtask.component';
import { ServiceStatusColorDirective } from './directive/serviceStatusColor.directive';
import { ViewServerComponent } from './view-server/view-server.component';
import { MatCardModule, MatExpansionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusCalculatorService } from './service/statusCalculator.service';
import { ViewServersComponent } from './view-servers/view-servers.component';

@NgModule({
    declarations: [
      ServerOverviewComponent,
      ViewMatooiComponent,
      ViewImporterComponent,
      ViewItemtaskComponent,
      ViewServerComponent,
      ServiceStatusColorDirective,
      ViewServersComponent,
    ],
    imports: [
      SharedModule,
      SERVER_OVERVIEW_ROUTING,
      MatCardModule, MatExpansionModule, MatInputModule, MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [
      StatusCalculatorService,
    ]
  })
  export class ServerOverviewModule {
  }
