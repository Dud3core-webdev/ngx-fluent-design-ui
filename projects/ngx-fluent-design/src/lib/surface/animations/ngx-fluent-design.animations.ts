import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export class NgxFluentDesignCommonAnimations {
    public static FadeInAnimation(fadeInTime: string, fadeoutTime: string): AnimationTriggerMetadata {
        return trigger('fadeIn', [
            state('show', style({
                opacity: 1,
                visibility: 'visible'
            })),
            state('hide', style({
                opacity: 0,
                visibility: 'hidden'
            })),
            transition('show => hide', [
                animate(fadeInTime)
            ]),
            transition('hide => show', [
                animate(fadeoutTime)
            ]),
        ]);
    }

    public static SlideInFromRightAnimation(slideInTime: string, slideOutTime: string): AnimationTriggerMetadata {
        return trigger('slideInRight', [
            state('hide', style({
                transform: 'translateX(100%)'
            })),
            state('show', style({
                transform: 'translateX(0%)'
            })),
            transition('show => hide', [
                animate(slideOutTime)
            ]),
            transition('hide => show', [
                animate(slideInTime)
            ]),
        ]);
    }

    public static slideInFromTop(slideInTime: string, slideOutTime: string): AnimationTriggerMetadata {
        return trigger('slideInFromTop', [
            state('hide', style({
                transform: 'translateY(-100%)',
                visibility: 'hidden',
                height: 0
            })),
            state('show', style({
                transform: 'translateY(0%)',
                visibility: 'visible'
            })),
            transition('show => hide', [
                animate(slideOutTime)
            ]),
            transition('hide => show', [
                animate(slideInTime)
            ]),
        ]);
    }
}
