import { Observable } from 'rxjs';

export interface INgxFluentDesignSurfaceComponentHandler {
    isOpen: boolean;
    isOpenAsObservable: Observable<boolean>;
    open(): void;
    close(): void;
}
