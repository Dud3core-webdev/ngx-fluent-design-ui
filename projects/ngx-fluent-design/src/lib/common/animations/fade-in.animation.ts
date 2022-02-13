import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const FadeInAnimation = (fadeInTime: string, fadeoutTime: string): AnimationTriggerMetadata => {
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
};

