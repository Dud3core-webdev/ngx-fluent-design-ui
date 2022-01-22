# NGXFluentDesign UI

### An open source implementation of the Microsoft Fluent Design system written in Angular.

The aim of this project is to provide a full suite of Angular components that closely match the official Microsoft Design System

### Development

No special configuration is required to develop this app, simply install from package.json using `yarn`, and run the usual Angular serve command `ng s --o`

The Fluent Design System can be found [here](https://aka.ms/FluentToolkits/Web/Figma) (Figma File).

#### NOTE! This package can only be deployed if you are a contributor to this repository.

### Important Links: 

- [Microsoft Fluent Design Web Components](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [ngx-fluent-design-docs (Live)](https://ngx-fluent-design.mfwebdev.net/home)
- [Npm](https://www.npmjs.com/package/ngx-fluent-design)

## Deployment
To deploy a patch for ngx-fluent-design, run  

```npm run deploy:patch```

to deploy a minor feature:

```npm run deploy:minor-upgrade```

## WARNING - Running the above commands with yarn will cause the publishing task to fail. No idea why
