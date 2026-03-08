import { Component } from '@angular/core';
import { ThemeSwitcherService, ThemeType } from './shared/services/theme-switcher.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgxFluentDesignCommandStackComponent } from '../../projects/ngx-fluent-design/src/lib/command/command-stack/ngx-fluent-design-command-stack.component';
import { NgxFluentDesignToggleComponent } from '../../projects/ngx-fluent-design/src/lib/input/toggle/ngx-fluent-design-toggle.component';
import { NgxFluentDesignPivotComponent } from '../../projects/ngx-fluent-design/src/lib/command/pivot/ngx-fluent-design-pivot.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NgxFluentDesignCommandStackComponent, NgxFluentDesignToggleComponent, NgxFluentDesignPivotComponent, RouterOutlet]
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
