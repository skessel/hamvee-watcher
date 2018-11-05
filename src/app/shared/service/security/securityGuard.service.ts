import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SecurityService } from './security.service';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(private securityService: SecurityService, private router: Router) {}


    canActivate(routeSnapshot: ActivatedRouteSnapshot, routerSnapshot: RouterStateSnapshot): boolean {

        const authenticated: boolean = this.securityService.isAuthenticated();

        if (!authenticated) {
            const redirect: string = encodeURI(routerSnapshot.url);
            this.router.navigate(['login'], {queryParams: {redirect: redirect}});
        }

        return authenticated;
    }

}
