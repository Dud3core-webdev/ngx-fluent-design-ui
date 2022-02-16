export class CssVariablePickerHelper {
    public static getCssVar(variableName: string): string {
        const style = getComputedStyle(document.documentElement);
        return style.getPropertyValue(`--ngx-fluent-design-${variableName}`);
    }
}
