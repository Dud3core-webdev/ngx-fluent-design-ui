import { isPlatformBrowser } from '@angular/common';
import { WINDOW, ApplicationWindowRef } from '../types/window-ref.clss';
import { ClassProvider, FactoryProvider, PLATFORM_ID } from '@angular/core';
import { BrowserWindowRef } from '../types/browser-window-ref.class';

export function windowFactory(browserWindowRef: ApplicationWindowRef, platformId: object): Window | object {
    if(isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }

    return {};
}

const browserWindowProvider: ClassProvider = {
    provide: ApplicationWindowRef,
    useClass: BrowserWindowRef
};

const windowProvider: FactoryProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [ ApplicationWindowRef, PLATFORM_ID ]
};

export const  WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];
