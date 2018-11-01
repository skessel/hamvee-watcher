import { Injectable } from '@angular/core';
import { AbstractStatus } from 'src/app/shared/model/abstractStatus';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class StatusCalculatorService {

    constructor() {}

    public calculateStateForModelStatus(status: AbstractStatus<any>): ServiceStatus {

        let result: ServiceStatus = ServiceStatus.ERROR;
        const success: boolean = status.success;

        if (success) {

            const currentTime: number = new Date().getUTCSeconds();
            const finishTime: number = status.lastFinishTime.getUTCSeconds();

            if ((currentTime - finishTime) > 60 * 60 * 3 ) { // 3h
                result = ServiceStatus.WARNING;
            } else {
                result = ServiceStatus.OK;
            }
        }

        return result;
    }


    public calculateStateForHttpError(httpResponse: HttpErrorResponse): ServiceStatus {
        return ServiceStatus.ERROR;
    }

}

export enum ServiceStatus {

    OK = 'OK',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}
