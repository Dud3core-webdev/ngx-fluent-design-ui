import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { DefaultThemeMap } from './default-theme.map';
import { DarkThemeMap } from './dark-theme.map';

export enum ThemeType {
    LIGHT = 'true',
    DARK = 'false'
}

@Injectable({
    providedIn: 'root'
})
export class ThemeSwitcherService {

    constructor(@Inject(DOCUMENT) document: Document) {
        this._themeBehaviourSubject = new BehaviorSubject<boolean>(true);
        this._document = document;

        this._themeBehaviourSubject.subscribe({
            next: (isDefaultTheme: boolean) => {
                if (isDefaultTheme) {
                    this.setTheme(this._lightTheme);
                } else {
                    this.setTheme(this._darkTheme);
                }
            }
        });
    }

    public set theme(theme: ThemeType) {
        this._themeBehaviourSubject.next(ThemeSwitcherService.parseBool(theme));
    }

    public get isNormalTheme(): boolean {
        return this._themeBehaviourSubject.value;
    }

    private readonly _themeBehaviourSubject: BehaviorSubject<boolean>;
    private readonly _document: Document;
    private readonly _lightTheme: Map<string, string> = DefaultThemeMap;
    private readonly _darkTheme: Map<string, string> = DarkThemeMap;

    private static parseBool(theme: ThemeType): boolean {
        return theme === 'true';
    }

    private setTheme(themeMap: Map<string, string>): void {
        themeMap.forEach((value, key) => {
            const root = this._document.body;
            root.style.setProperty(key, value);
        });
    }
}
