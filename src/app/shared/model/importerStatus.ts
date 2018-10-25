export class ImporterStatus {

    lastFinishTime: Date;
    success: boolean;
    sphere: Sphere;

    constructor() {}
}

export class Sphere {

    name: string;
    baseUrl: URL;
    timeZone: string;

    constructor() {}

}