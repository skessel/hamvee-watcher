import { RouterModule, Routes, PreloadAllModules, LoadChildren, LoadChildrenCallback } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SecurityGuard } from './shared/service/security/securityGuard.service';
import { ServerOverviewModule } from './server-overview/server-overview.module';

export const ROUTES: Routes = [
    {path: '', loadChildren: loadServerOverviewModule,
      data: {title: 'Hamvee Server Watcher'}, canActivate: [SecurityGuard]},
    {path: 'login', component: LoginComponent, data: {title: 'Hamvee Server Watcher'}},
    {path: '**', redirectTo: ''}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules});

export function loadServerOverviewModule(): any {
    return ServerOverviewModule;
}

export class AppRoutingModle {
}
