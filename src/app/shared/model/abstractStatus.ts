export abstract class AbstractStatus<T> {

    lastFinishTime: Date;
    success: boolean;
    sphere: T;

    constructor() {}
}
