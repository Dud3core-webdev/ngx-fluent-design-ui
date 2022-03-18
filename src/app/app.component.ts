import { Component } from '@angular/core';
import { ThemeSwitcherService, ThemeType } from './shared/services/theme-switcher.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private readonly _themeService: ThemeSwitcherService;
    private readonly _router: Router;

    public get isNormalTheme(): boolean {
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService, router: Router) {
        this._themeService = themeService;
        this._router = router;
        this._themeService.theme = ThemeType.LIGHT;
    }

    public toggleTheme(): void {
        if (this.isNormalTheme) {
            this._themeService.theme = ThemeType.DARK;
        } else {
            this._themeService.theme = ThemeType.LIGHT;
        }
    }

    public navigateTo(url: string): void {
        this._router.navigate(['', url]);
    }

    public isCurrentRoute(url: string): boolean {
        const currentRoute = this._router.url;
        return currentRoute.includes(url);
    }
}
