import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ServerOverviewComponent } from './server-overview/server-overview.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SecurityGuard } from './shared/service/security/securityGuard.service';

export const ROUTES: Routes = [
    {path: '', component: ServerOverviewComponent, data: {title: 'Hamvee Server Watcher'}, canActivate: [SecurityGuard]},
    {path: 'login', component: LoginComponent, data: {title: 'Hamvee Server Watcher'}},
    {path: '**', redirectTo: ''}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules});

export class AppRoutingModle {
}
