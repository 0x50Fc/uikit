
namespace kk {

    export interface IStyle {
        [name: string]: string
    }

    export interface IStyleElement extends IElement {

        style(name: string): IStyle;
        readonly status: string;
        addStatus(status: string): void;
        setStatus(status: string): void;
        removeStatus(status: string): void;
        hasStatus(status: string): boolean;
        changedStatus(): void;
        changedKey(key: string): void;
        changedKeys(keys: string[]): void;
        keys():string[];
    }

}
