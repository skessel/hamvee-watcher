import { Server } from 'src/app/shared/model/server';
import { environment } from './environment';
import { URL } from 'url';

export class Servers {

    static readonly BULLRING: Server = new Server('Bullring',
        environment.bullringMatooiUrl,
        environment.bullringItemTaskUrl,
        environment.bullringImporterUrl);

    static readonly BRENTCROSS: Server = new Server('Brentcross',
        environment.brentcrossMatooiUrl,
        environment.brentcrossItemTaskUrl,
        environment.brentcrossImporterUrl);

    static readonly PLACESDESHALLES: Server = new Server('Place de Halles',
        environment.placedeshallesMatooiUrl,
        environment.placedeshallesItemTaskUrl,
        environment.placedeshallesImporterUrl);

    static readonly SERVERS: Array<Server> = [Servers.BULLRING, Servers.BRENTCROSS, Servers.PLACESDESHALLES];

}
