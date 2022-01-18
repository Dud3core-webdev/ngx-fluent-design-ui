import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SideNavLinks } from './side-nav-links.interface';

@Component({
    selector: 'side-navigation',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    public environment = environment;
    @Input() public readonly sideNavLinks: SideNavLinks = [];
}
