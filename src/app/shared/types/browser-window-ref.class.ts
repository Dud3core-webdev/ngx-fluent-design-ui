import { ApplicationWindowRef } from './window-ref.clss';

export class BrowserWindowRef extends ApplicationWindowRef {

    constructor() {
        super();
    }

    get nativeWindow(): Window | object {
        return window;
    }
}
