import { ErrorHandler, Injectable } from '@angular/core';
import { UnAuthorizationError, ServerWrongFileSizeError } from './custom-error';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
    private errorMode: ErrorMode = ErrorMode.All;

    constructor(private _notificationsService: NotificationsService) {
        super(false);
    }


    public handleError(error: any): void {
        switch (this.errorMode) {
            case ErrorMode.All: {
                console.info(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
                this._notificationsService.error('Error :', error.originalError.toString());
                break;
            }
            case ErrorMode.Notification: {
                this._notificationsService.error('Error :', error.originalError.toString());
                break;
            }
            case ErrorMode.Console: {
                console.info(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
                break;
            }
            default: {
                super.handleError(error);
                break;
            }
        }
    }

    public setErrorMode(mode: ErrorMode = ErrorMode.All) {
        this.errorMode = mode
    }
}

export enum ErrorMode {
    All = 0,
    Notification = 1,
    Console = 2,
}
