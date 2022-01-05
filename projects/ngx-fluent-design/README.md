# NGXFluentDesign UI

## WARNING

I've only tested this library on Angular 11, I will be working on compatibility at some point, but for now I'd probably only install it if Ivy is enabled in your project, just to be safe.

## UPDATES: 

- I realised that the text fields weren't actually binding to an abstract/formControl when declaring it
`[formControlName]="'SomeControlName'"`. I don't even know how I didn't spot this. re-built standard-input so it supports text areas and inputs but still binds to a form control.

- fixed margin on inputs that was causing an issue where the right most border wasn't appearing (`<input>` only) - v0.0.7

- Refactored some styles to clean up SCSS in project. v0.0.7

- Added a directive that can be used in the standard `<input>` so text fields can be highlighted with red when the control isn't valid. (v0.0.5)

## Components: 

So far the library is very limited in components:

- Action Button
- Compound Action Button
- Card
- Document Card (Basic implementation)
- Input 
- Multi-Line Input (TextArea)

## Requests

This is an open source library so go ahead and open some requests if you need a component. I want to actively work on this.

If you find any issues, then feel free to report them on [Github](https://github.com/Dud3core-webdev/ngx-fluent-design-ui)

## Getting started: 

`yarn add ngx-fluent-design`\
`npm i ngx-fluent-design`

## Usage

(I will be adding more documentation for this library, I just need to really get my head down and work on it.)

You can view the [docs](https://ngx-fluent-design.mfwebdev.net/home) for this library for more information.
