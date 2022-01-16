import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, Observable, ObservedValueOf, of } from 'rxjs';
import { SwUpdate, UpdateActivatedEvent, UpdateAvailableEvent } from '@angular/service-worker';
import { WINDOW } from '../types/window-ref.clss';
import { map, mapTo, switchMap, tap } from 'rxjs/operators';
import { IApplicationStatus } from '../types/application-status.interface';

@Injectable({
    providedIn: 'root'
})
export class AppStatusService {
    public serviceWorkerUpdates$: BehaviorSubject<any> = new BehaviorSubject<any>('');

    private readonly _updates: SwUpdate;
    private readonly _window: Window;

    constructor(updates: SwUpdate, @Inject(WINDOW) window: Window) {
        this._updates = updates;
        this._window = window;
        this.setUpdates();
    }

    public reloadApp(): Promise<void> {
        return this._updates.activateUpdate()
            .then(() => this._window.location.reload());
    }

    public get updateAvailable(): Observable<any> {
        return this.serviceWorkerUpdates$.asObservable();
    }

    public get onlineStatus(): Observable<IApplicationStatus> {
        return combineLatest([
            of(navigator.onLine),
            fromEvent(this._window, 'online').pipe(mapTo(true)),
            fromEvent(this._window, 'offline').pipe(mapTo(false)),
        ]).pipe(
            map(([NavigatorOnline, WindowOnline, WindowOffline]: Array<boolean>): IApplicationStatus => {
                return {
                    windowOnline: WindowOnline,
                    navigatorOnline: NavigatorOnline,
                    windowOffline: WindowOffline
                };
            })
        );
    }

    private setUpdates(): void {
        this._updates.available
            .pipe(
                tap((event: UpdateAvailableEvent) => {
                    console.log('[ Available ] current version: ', event.current);
                    console.log('[ Available ] available version: ', event.available);

                    if (event.available) {
                        this.serviceWorkerUpdates$.next(event.available.hash.slice(0, 4));
                    }
                })
            ).subscribe();

        this._updates.activated
            .pipe(
                tap((event: UpdateActivatedEvent) => {
                    console.log('[ Activated ] old version was: ', event.previous);
                    console.log('[ Activated ] new version is: ', event.current);
                })
            ).subscribe();
    }
}
