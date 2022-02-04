# NGXFluentDesign UI

An open-source, Angular implementation of Microsoft's Fluent Design system. Based off designs found in the official [Figma File](https://aka.ms/FluentToolkits/Web/Figma)

## WARNING
We've only tested this package with Angular 11. We are working out a plan to support multiple versions of Angular, but for now use at your own risk!

## VERSIONS 0.3.2 -> 0.3.4 of this library are broken, please do not install these versions. 

This was due to including `BrowserAnimationsModule` at the library level, and would cause a multiple imports error. Please include `BrowserAnimationsModule` in your `app.module.ts` file.

## Breaking Changes
Cards have been moved from `NgxFluentDesignCardModule` to `NgxFluentDesignCommomComponentsModule`


## Notes
Massive shout out to [Smephey](https://github.com/Smephey) for helping with all this and making everything look great!

We're pretty stoked on this library so far, and there's definitely more updates to come! We're aiming for a V1 release as soon as possible. 

You can view the Git repository (linked below) to see what we're working on, or raise any issues.

## Getting started:

`yarn add ngx-fluent-design`\
`npm i ngx-fluent-design`

## Usage
You can view the [docs](https://ngx-fluent-design.mfwebdev.net/home) for this library for more information.

We are working on documentation alongside the actual library, so bare with us if every component isn't documented.

## Components:
- Action Button
- Compound Action Button
- Card
- Document Card (Basic implementation)
- Input 
- Multi-Line Input (TextArea)
- Message bar
- Dialog
- progress/spinners
- Icons

## Requests

This is an open source library so go ahead and open some requests if you need a component. I want to actively work on this.

If you find any issues, then feel free to report them on [Github](https://github.com/Dud3core-webdev/ngx-fluent-design-ui)
