import { INgxFluentDesignComponentHandler } from '../../common/types/ngx-fluent-design-component-handler.interface';
import { BehaviorSubject, Observable } from 'rxjs';

export class NgxFluentDesignDialogHandler implements INgxFluentDesignComponentHandler {

    private readonly _isOpenSubject: BehaviorSubject<boolean>;

    constructor(isOpen: boolean) {
        this._isOpenSubject = new BehaviorSubject<boolean>(isOpen);
    }

    public get isOpen(): boolean {
        return this._isOpenSubject.value;
    }

    public get isOpenAsObservable(): Observable<boolean> {
        return this._isOpenSubject.asObservable();
    }

    public close(): void {
        if (this.isOpen === true) {
            this._isOpenSubject.next(false);
        }
    }

    public open(): void {
        if (this.isOpen === false) {
            this._isOpenSubject.next(true);
        }
    }
}
