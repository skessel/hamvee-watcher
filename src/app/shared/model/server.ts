
export class Server {

    name: string;
    matooiURL: URL;
    itemTaskURL: URL;
    importerTaskURL: URL;

    constructor (name: string, matooiURL: string, itemTaskURL: string, importerTaskURL: string) {
        this.name = name;
        this.matooiURL = new URL(matooiURL);
        this.itemTaskURL = new URL(itemTaskURL);
        this.importerTaskURL = new URL(importerTaskURL);
    }

}
