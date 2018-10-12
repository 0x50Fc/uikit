
namespace kk {

    export interface IDocumentObserver {
        alloc(document: IDocument, element: IElement): void;
        root(document: IDocument, element: IElement): void;
        set(document: IDocument, element: IElement, key: number, value: string): void;
        append(document: IDocument, element: IElement, e: IElement): void;
        before(document: IDocument, element: IElement, e: IElement): void;
        after(document: IDocument, element: IElement, e: IElement): void;
        remove(document: IDocument, id: number): void;
        key(document: IDocument, key: number, name: string): void;
    }

    export interface ElementKeyMap {
        [key: number]: string
    }

    export interface IDocument extends IEventEmitter {

        rootElement: IElement | undefined;
        createElement(name: string, id?: number): IElement;
        element(id: number): IElement | undefined;
        elementsByName(name: string): IElement[];
        addLibrary(func: (document: IDocument, name: string, id: number) => IElement, name?: string): void;
        set(key: string, elementKey: number): void;
        elementKey(key: string): number;
        key(elementKey: number): string;
        readonly elementKeys: ElementKeyMap;
        recycle(): void;
        beginObserver(observer: IDocumentObserver): void;
        getObserver(): IDocumentObserver | undefined;
        endObserver(): void;
        removeElement(element: IElement): void;
    }

}