import { URL } from 'url';

export class Server {

    name: string;
    matooiURL: URL;
    itemTaskURL: URL;
    importerTaskURL: URL;

    constructor (name: string, matooiURL: URL, itemTaskURL: URL, importerTaskURL: URL){
        this.name = name;
        this.matooiURL = matooiURL;
        this.itemTaskURL = itemTaskURL;
        this.importerTaskURL = importerTaskURL;
    }

}