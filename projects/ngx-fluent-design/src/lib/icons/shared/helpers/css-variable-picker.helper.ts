export class CssVariablePickerHelper {
    public static getCssVar(variableName: string): string {
        const style = getComputedStyle(document.body);
        return style.getPropertyValue(`--theme-${variableName}`);
    }

    public static getNewCssVar(variableName: string): string {
        const style = getComputedStyle(document.body);
        return style.getPropertyValue(`--ngx-fluent-design-${variableName}`);
    }

    // ngx-fluent-design-foreground-neutral-primary
}
