import { AbstractStatus } from './abstractStatus';

export class ImporterStatus extends AbstractStatus<Sphere> {

}

export class Sphere {

    name: string;
    baseUrl: URL;
    timeZone: string;

    constructor() {}

}
