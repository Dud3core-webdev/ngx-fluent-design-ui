export interface ISideNavLinks {
    readonly title: string;
    readonly shouldDisplayOnLive: boolean;
    readonly routerLink?: Array<string>;
    readonly subNavItems?: Array<ISideNavLinks>;
}

export declare type SideNavLinks = Array<ISideNavLinks>;
