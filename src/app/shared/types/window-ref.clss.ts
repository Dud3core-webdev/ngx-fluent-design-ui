import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken('WindowToken');
export abstract class ApplicationWindowRef {
    get nativeWindow(): Window | object {
        throw new Error('Not Implemented');
    }
}
