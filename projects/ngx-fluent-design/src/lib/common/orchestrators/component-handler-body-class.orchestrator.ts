import { INgxFluentDesignComponentHandler } from '../types/ngx-fluent-design-component-handler.interface';
import { Subscription } from 'rxjs';

export class ComponentHandlerBodyClassOrchestrator {
    private readonly _componentHandler: INgxFluentDesignComponentHandler;
    private readonly _document: Document;
    private readonly _subscriptions: Subscription;
    private readonly _noScrollClassName: string = 'no-scroll';

    constructor(componentHandler: INgxFluentDesignComponentHandler, document: Document) {
        this._componentHandler = componentHandler;
        this._document = document;
        this._subscriptions = new Subscription();
    }

    public onInit(): void {
        this._subscriptions.add(
            this._componentHandler.isOpenAsObservable
                .subscribe({
                    next: (isOpen: boolean): void => {
                        this.toggleNoScroll(isOpen);
                    }
                })
        );
    }

    public onDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    private toggleNoScroll(isOpen: boolean): void {
        if (isOpen) {
            this._document.body.classList.add(this._noScrollClassName);
        } else {
            this._document.body.classList.remove(this._noScrollClassName);
        }
    }
}
