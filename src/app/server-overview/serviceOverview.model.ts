import { Observable } from 'rxjs';
import { MatooiStatus, MatooiPing } from '../shared/model/matooiStatus';
import { ImporterStatus } from '../shared/model/importerStatus';
import { ItemStatus } from '../shared/model/itemStatus';

export class ServerOverviewModel {

    name: String;
    matooiPing: MatooiPing;
    importerStatus: ImporterStatus;
    itemStatus: ItemStatus;

    constructor(name: string) {
        this.name = name;
    }

}
