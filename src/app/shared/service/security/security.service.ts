import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * This class is a singelton
 */
@Injectable()
export class SecurityService {

    public static readonly CURRENT_USER: string = 'server-watcher-current-user';

    constructor(private router: Router) {}

    private authenticated: boolean;

    public login(login: string, password: string, rememberLogin: boolean): boolean {

        const enviromentLogin = environment.login;
        const enviromentPassword = environment.password;

        this.authenticated = false;

        if (enviromentLogin === login &&  enviromentPassword === password) {
            console.log('Login success');
            this.authenticated = true;

            if (rememberLogin) {

                const authString: string = login + ':' + password;
                const authStringBase64: string = window.btoa(authString);

                localStorage.setItem(SecurityService.CURRENT_USER, authStringBase64);
            }
        } else {
            console.error('Authentication failed');
        }

        return this.authenticated;
    }

    public logout(): void {
        localStorage.removeItem(SecurityService.CURRENT_USER);
        this.authenticated = false;
        this.router.navigateByUrl('login');
    }

    public isAuthenticated(): boolean {

        if (!this.authenticated) {
            try {
                const authStringBase64: string = localStorage.getItem(SecurityService.CURRENT_USER);
                const authString: string = window.atob(authStringBase64);

                const credentials: Array<string> = authString.split(':');

                this.login(credentials[0], credentials[1], true);
            } catch (error) {
                console.log(error);
            }
        }

        return this.authenticated;
    }
}
