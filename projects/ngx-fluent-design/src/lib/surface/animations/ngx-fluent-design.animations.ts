import { animate, animation, AnimationTriggerMetadata, state, style, transition, trigger, useAnimation } from '@angular/animations';

// -----------------------------
// Base Reusable Animations
// -----------------------------

export const fadeInAnimation = animation([
    style({ opacity: 0, visibility: 'hidden' }),
    animate('{{ time }}', style({ opacity: 1, visibility: 'visible' }))
], { params: { time: '150ms' } });

export const fadeOutAnimation = animation([
    style({ opacity: 1, visibility: 'visible' }),
    animate('{{ time }}', style({ opacity: 0, visibility: 'hidden' }))
], { params: { time: '150ms' } });

export const slideInRightAnimation = animation([
    style({ transform: 'translateX(100%)' }),
    animate('{{ time }}', style({ transform: 'translateX(0%)' }))
], { params: { time: '150ms' } });

export const slideOutRightAnimation = animation([
    style({ transform: 'translateX(0%)' }),
    animate('{{ time }}', style({ transform: 'translateX(100%)' }))
], { params: { time: '150ms' } });

export const slideInTopAnimation = animation([
    style({ transform: 'translateY(-100%)', visibility: 'hidden', height: 0 }),
    animate('{{ time }}', style({ transform: 'translateY(0%)', visibility: 'visible' }))
], { params: { time: '150ms' } });

export const slideOutTopAnimation = animation([
    style({ transform: 'translateY(0%)', visibility: 'visible' }),
    animate('{{ time }}', style({ transform: 'translateY(-100%)', visibility: 'hidden', height: 0 }))
], { params: { time: '150ms' } });


// -----------------------------
// Component Triggers
// -----------------------------

export const ngxFluentDesignFadeInTrigger: AnimationTriggerMetadata = trigger('fadeIn', [
    state('show', style({ opacity: 1, visibility: 'visible' })),
    state('hide', style({ opacity: 0, visibility: 'hidden' })),
    transition('hide => show', [
        useAnimation(fadeInAnimation, { params: { time: '{{ inTime }}' } })
    ], { params: { inTime: '150ms' } }),
    transition('show => hide', [
        useAnimation(fadeOutAnimation, { params: { time: '{{ outTime }}' } })
    ], { params: { outTime: '150ms' } })
]);

export const ngxFluentDesignSlideInRightTrigger: AnimationTriggerMetadata = trigger('slideInRight', [
    state('show', style({ transform: 'translateX(0%)' })),
    state('hide', style({ transform: 'translateX(100%)' })),
    transition('hide => show', [
        useAnimation(slideInRightAnimation, { params: { time: '{{ inTime }}' } })
    ], { params: { inTime: '150ms' } }),
    transition('show => hide', [
        useAnimation(slideOutRightAnimation, { params: { time: '{{ outTime }}' } })
    ], { params: { outTime: '150ms' } })
]);

export const ngxFluentDesignSlideInTopTrigger: AnimationTriggerMetadata = trigger('slideInFromTop', [
    state('show', style({ transform: 'translateY(0%)', visibility: 'visible' })),
    state('hide', style({ transform: 'translateY(-100%)', visibility: 'hidden', height: 0 })),
    transition('hide => show', [
        useAnimation(slideInTopAnimation, { params: { time: '{{ inTime }}' } })
    ], { params: { inTime: '150ms' } }),
    transition('show => hide', [
        useAnimation(slideOutTopAnimation, { params: { time: '{{ outTime }}' } })
    ], { params: { outTime: '150ms' } })
]);
