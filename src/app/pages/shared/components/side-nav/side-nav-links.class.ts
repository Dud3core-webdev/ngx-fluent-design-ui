import { SideNavLinks } from './side-nav-links.interface';

export const sideNavLinks = (): SideNavLinks => [
    {
        title: 'Inputs',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Form Field',
                routerLink: ['', 'inputs', 'form-field'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Toggle',
                routerLink: ['', 'inputs', 'toggle'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Calls To Action',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Standard CTA',
                routerLink: ['', 'calls-to-action', 'standard'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Compound CTA',
                routerLink: ['', 'calls-to-action', 'compound'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Alerts And Notifications',
        shouldDisplayOnLive: false,
        subNavItems: [
            {
                title: 'Message Bar',
                routerLink: ['', 'alerts-and-notifications', 'message-bar'],
                shouldDisplayOnLive: false
            }
        ]
    }
];
