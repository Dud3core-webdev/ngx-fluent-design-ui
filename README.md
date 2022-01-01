# NGXFluentDesign UI

## WARNING

I've only tested this library on Angular 11, I will be working on compatibility at some point, but for now I'd probably only install it if Ivy is enabled in your project, just to be safe. 

## Why does this package exist?

I think Microsoft's Fluent Design is a very nice UI design pattern. It's clean, it's simple and I haven't found a decent NGX package out there for this (not that I've looked).

The aim is to create a full component library that is simple to use and integrate into a project. 

I also wanted to create a nice component library for my portfolio website. 

## Components: 

So far the library is very limited in components:

- Action Button
- Compound Action Button
- Card
- Document Card (Basic implementation)
- Input 
- Multi-Line Input

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
<!-- Create a contact form? -->
<ngx-fluent-design-card>
    <div class="w-100 d-flex flex-md-row flex-column">
        <div class="contact-card-info w-md-25 w-100">
            <h2 class="spec--card-header">Contact me</h2>
            <p class="spec--card-sub-header">Fill in this form and I will get back to you</p>
        </div>
        <div class="contact-card-form w-md-75 w-100">
            <form [formGroup]="contactFormGroup" class="d-flex flex-column w-100">
                <section class="form-inputs">
                    <ngx-fluent-design-standard-input
                        class="my-2"
                        [placeholder]="'Enter Your Name'"
                        [type]="'text'"
                        [id]="'contact-name'"
                        [label]="'Full Name'"
                        [required]="true"
                        [formControlName]="'name'">
                    </ngx-fluent-design-standard-input>

                    <ngx-fluent-design-standard-input
                        class="my-2"
                        [placeholder]="'Enter Your Email'"
                        [type]="'text'"
                        [id]="'contact-email'"
                        [label]="'Email Address'"
                        [required]="true"
                        [formControlName]="'email'">
                    </ngx-fluent-design-standard-input>

                    <ngx-fluent-design-multiline-input
                        class="my-2"
                        [rows]="5"
                        [required]="true"
                        [label]="'Message'"
                        [id]="'contact-message'"
                        [placeholder]="'Enter a message here'"
                        [isFixed]="true"
                        [formControlName]="'message'">
                    </ngx-fluent-design-multiline-input>
                </section>

                <div class="d-flex flex-row w-100 justify-content-between my-4">
                    <ngx-fluent-design-compound-button
                        class="font-white"
                        type="primary"
                        [secondaryText]="'This may take a while'"
                        [disabled]="contactFormGroup.invalid"
                        (clicked)="submitForm()">
                        Submit
                    </ngx-fluent-design-compound-button>

                    <ngx-fluent-design-compound-button
                        type="standard"
                        (clicked)="closeForm()">
                        Cancel
                    </ngx-fluent-design-compound-button>
                </div>
            </form>
        </div>
    </div>
</ngx-fluent-design-card>
```