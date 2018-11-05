import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * This class is a singelton
 */
@Injectable()
export class SecurityService {

    constructor(private router: Router) {}

    private authenticated: boolean;

    public login(login: string, password: string): boolean {

        const enviromentLogin = environment.login;
        const enviromentPassword = environment.password;

        this.authenticated = false;

        if (enviromentLogin === login &&  enviromentPassword === password) {
            console.log('Login success');
            this.authenticated = true;
        } else {
            console.error('Authentication failed');
        }

        return this.authenticated;
    }

    public logout(): void {
        this.authenticated = false;
        this.router.navigateByUrl('login');
    }

    public isAuthenticated(): boolean {
        return this.authenticated;
    }
}
