import { Server } from 'src/app/shared/model/server';
import { environment } from './environment';
import { URL } from 'url';

export class Servers {

    readonly BULLRING: Server = new Server('Bullring',
        new URL(environment.bullringMatooiUrl),
        new URL(environment.bullringItemTaskUrl),
        new URL(environment.bullringItemTaskUrl));

    readonly BRENTCROSS: Server = new Server('Brentcross',
        new URL(environment.brentcrossMatooiUrl),
        new URL(environment.brentcrossItemTaskUrl),
        new URL(environment.brentcrossItemTaskUrl));

}