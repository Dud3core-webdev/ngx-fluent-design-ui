import { INgxFluentDesignSurfaceComponentHandler } from '../../types/ngx-fluent-design-surface-component-handler.interface';
import { BehaviorSubject, Observable } from 'rxjs';

export class NgxFluentDesignModalHandler implements INgxFluentDesignSurfaceComponentHandler {
    private _isOpen: BehaviorSubject<boolean>;

    constructor(isOpen: boolean) {
        this._isOpen = new BehaviorSubject(isOpen);
    }

    public get isOpen(): boolean {
        return this._isOpen.value;
    }

    public get isOpenAsObservable(): Observable<boolean> {
        return this._isOpen.asObservable();
    }

    public open(): void {
        if (!this._isOpen.value) {
            this._isOpen.next(true);
        }
    }

    public close(): void {
        if (this._isOpen.value) {
            this._isOpen.next(false);
        }
    }
}
