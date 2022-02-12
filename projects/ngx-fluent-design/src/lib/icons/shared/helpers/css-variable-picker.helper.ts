export class CssVariablePickerHelper {
    public static getCssVar(variableName: string): string {
        const style = getComputedStyle(document.body);
        return style.getPropertyValue(`--theme-${variableName}`);
    }
}
