import { Observable } from 'rxjs';

export interface INgxFluentDesignComponentHandler {
    isOpen: boolean;
    isOpenAsObservable: Observable<boolean>;
    open(): void;
    close(): void;
}
