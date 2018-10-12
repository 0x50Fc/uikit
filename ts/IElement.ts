

namespace kk {

    export interface IAttributeMap {
        [key: string]: string | undefined;
    }

    export interface IElementEvent extends IEvent {
        cancelBubble: boolean;
        element: IElement | undefined;
        data: any;
    }

    export interface IElement extends IEventEmitter {
        readonly id: number;
        readonly name: string;
        readonly document: IDocument | undefined;
        readonly firstChild: IElement | undefined;
        readonly lastChild: IElement | undefined;
        readonly nextSibling: IElement | undefined;
        readonly prevSibling: IElement | undefined;
        readonly parent: IElement | undefined;
        readonly levelId:number;
        readonly depth:number;
        append(element: IElement): void;
        before(element: IElement): void;
        after(element: IElement): void;
        remove(): void;
        appendTo(element: IElement): void;
        beforeTo(element: IElement): void;
        afterTo(element: IElement): void;
        get(key: string | number): string | undefined;
        set(key: string | number, value?: string): void;
        readonly attributes: IAttributeMap;
        hasBubble(name: string): boolean;
        object(key: string): any;
        setObject(key: string, object: any): void;
        recycle(): void;
    }
}
