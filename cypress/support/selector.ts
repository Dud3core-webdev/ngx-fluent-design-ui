export abstract class Selector {
    public static attrE2E(attr: string): string {
        return `[data-e2e="${attr}"]`;
    }
}
