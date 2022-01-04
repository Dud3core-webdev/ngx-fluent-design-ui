# NGXFluentDesign UI

## WARNING

I've only tested this library on Angular 11, I will be working on compatibility at some point, but for now I'd probably only install it if Ivy is enabled in your project, just to be safe.

## UPDATES: 

- I realised that the text fields weren't actually binding to an abstract/formControl when declaring it
`[formControlName]="'SomeControlName'"`. I don't even know how I didn't spot this. re-built standard-input so it supports text areas and inputs but still binds to a form control.

- fixed margin on inputs that was causing an issue where the right most border wasn't appearing (`<input>` only) - v0.0.7

- Refactored some styles to clean up SCSS in project. v0.0.7

- Added a directive that can be used in the standard `<input>` so text fields can be highlighted with red when the control isn't valid. (v0.0.5)

## Why does this package exist?

I think Microsoft's Fluent Design is a very nice UI design pattern. It's clean, it's simple, and I haven't found a NGX package out there for this (not that I've looked).

The aim is to create a full component library that is simple to use and integrate into a project. 

I also wanted to create a nice component library for my portfolio website. 

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

## Getting started: 

`yarn add ngx-fluent-design`\
`npm i ngx-fluent-design`

## Usage

(I will be adding more documentation for this library, I just need to really get my head down and work on it.)

### Default Styles:

There is a default stylesheet for this project, this mainly just sets default colours, you can either import the style sheet or use your own variables (Will be updated as the library evolves): 

#### Importing Styles: 
to import the default styles for the library, simply paste this code in your main stylesheet: 

``` scss
@import "~ngx-fluent-design/src/lib/styles";
```

#### Creating your own styles: 
To create your own styles simply add these variables to `root:` in your main stylesheet, like so: 

``` scss 
:root {
    /** Primary, standard colors */
    --primary-color: rgb(0, 120, 212);
    --primary-disabled-background-color: rgb(243, 242, 241);
    --primary-disabled-font-color: rgb(210, 208, 206);

    /** CTA */
    --primary-cta-font-color: rgb(255, 255, 255);
    --primary-cta-hover-background-color: rgb(0, 90, 158);

    /** Input */
    --primary-input-border: rgb(50, 49, 48);
}
```
### Usage in code

#### Import into Module: 
``` ts
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule, NgxFluentDesignInputModule } from "ngx-fluent-design";

@NgModule({
    imports: [
        NgxFluentDesignCardModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule
    ]
})
export class SomeModule {}
```

#### Use in template:

``` html
<div class="container">
    <ngx-fluent-design-card>
        <form [formGroup]="testFormGroup">
            <ngx-fluent-design-standard-input
                [label]="'Test label'">
                <input ngxFluentDesignInput
                       id="standard-input"
                       [formControlName]="'standardInput'">
            </ngx-fluent-design-standard-input>

            <ngx-fluent-design-standard-input
                [label]="'Test label'">
            <textarea ngxFluentDesignInput
                      rows="8"
                      [formControlName]="'standardTextArea'"
                      id="standard-text-area">
            </textarea>
            </ngx-fluent-design-standard-input>

            <div class="d-flex flex-row justify-content-between w-100">
                <ngx-fluent-design-compound-button
                    type="primary"
                    [disabled]="testFormGroup.invalid">
                    Submit
                </ngx-fluent-design-compound-button>

                <ngx-fluent-design-compound-button
                    type="standard"
                    (clicked)="testFormGroup.reset()">
                    Reset
                </ngx-fluent-design-compound-button>
            </div>
        </form>
    </ngx-fluent-design-card>
</div>
```
