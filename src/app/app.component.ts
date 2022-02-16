import { Component } from '@angular/core';
import { ThemeSwitcherService, ThemeType } from './shared/services/theme-switcher.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
        this._themeService.theme = ThemeType.DARK;
    }

    public toggleTheme(): void {
        if (this.isNormalTheme) {
            this._themeService.theme = ThemeType.DARK;
        } else {
            this._themeService.theme = ThemeType.LIGHT;
        }
    }
}
