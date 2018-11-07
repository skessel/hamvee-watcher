import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SecurityGuard } from '../shared/service/security/securityGuard.service';
import { ServerOverviewComponent } from './server-overview.component';
import { ViewServerComponent } from './view-server/view-server.component';
import { ViewServersComponent } from './view-servers/view-servers.component';

export const ROUTES: Routes = [
    {path: '', component: ServerOverviewComponent,
    children: [
        {path: '', component: ViewServersComponent},
        {path: 'details/:server', component: ViewServerComponent},
    ]}
];

export const SERVER_OVERVIEW_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);

export class ServerOverviewRoutingModle {
}
