import { BehaviorSubject } from 'rxjs';

export class NgxFluentDesignPanelHandler {
    private _isOpen: BehaviorSubject<boolean>;

    constructor(isOpen: boolean) {
        this._isOpen = new BehaviorSubject(isOpen);
    }

    public get isOpen(): boolean {
        return this._isOpen.value;
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
