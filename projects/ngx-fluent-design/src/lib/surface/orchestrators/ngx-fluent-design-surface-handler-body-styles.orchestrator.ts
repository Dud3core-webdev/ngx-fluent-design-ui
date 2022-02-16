import { INgxFluentDesignSurfaceComponentHandler } from '../../types/ngx-fluent-design-surface-component-handler.interface';
import { Subscription } from 'rxjs';

export class NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator {
    private readonly _componentHandler: INgxFluentDesignSurfaceComponentHandler;
    private readonly _document: Document;
    private readonly _subscriptions: Subscription;
    private readonly _classList: Array<string>;

    constructor(componentHandler: INgxFluentDesignSurfaceComponentHandler, document: Document, classList: Array<string>) {
        this._componentHandler = componentHandler;
        this._document = document;
        this._classList = classList;
        this._subscriptions = new Subscription();
    }

    public onInit(): void {
        this._subscriptions.add(
            this._componentHandler.isOpenAsObservable
                .subscribe({
                    next: (isOpen: boolean): void => {
                        this.toggleClassList(isOpen);
                    }
                })
        );
    }

    public onDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    private toggleClassList(isOpen: boolean): void {
        if (isOpen) {
            this._classList.forEach((cssClass: string): void => {
                this._document.body.classList.add(cssClass);
            });
        } else {
            this._classList.forEach((cssClass: string): void => {
                this._document.body.classList.remove(cssClass);
            });
        }
    }
}
