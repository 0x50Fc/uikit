
namespace kk {

    interface IDocumentLibraryMap {
        [key: string]: (document: IDocument, name: string, id: number) => IElement;
    }

    interface IDocumentElementByIdMap {
        [key: number]: IElement
    }

    interface IDocumentElementsByNameMap {
        [key: string]: IElement[]
    }

    interface IDocumentKeyMap {
        [key: string]: number
    }

    export class Document extends EventEmitter implements IDocument {

        private _rootElement: IElement | undefined;
        private _librarys: IDocumentLibraryMap = {};
        private _defaultLibrary: ((document: IDocument, name: string, id: number) => IElement) | undefined;
        private _autoKey: number = 0;
        private _elements: IDocumentElementByIdMap = {};
        private _elementsByName: IDocumentElementsByNameMap = {};
        private _observer: IDocumentObserver | undefined;
        private _elementKeys: ElementKeyMap = {};
        private _keys: IDocumentKeyMap = {};

        public get rootElement(): IElement | undefined {
            return this._rootElement;
        }

        public set rootElement(element: IElement | undefined) {
            this._rootElement = element;
        }

        public createElement(name: string, id?: number): IElement {

            if (id === undefined) {
                id = this._autoKey + 1;
                this._autoKey = id;
            } else if (id > this._autoKey) {
                this._autoKey = id;
            }

            var fn = this._librarys[name];

            var e: IElement | undefined;

            if (fn !== undefined) {
                e = fn(this, name, id);
            }

            if (e === undefined) {
                if (this._defaultLibrary !== undefined) {
                    e = this._defaultLibrary(this, name, id);
                }
            }

            if (e === undefined) {
                e = new Element(this, name, id);
            }

            this._elements[id] = e;

            var vs = this._elementsByName[name];

            if (vs === undefined) {
                vs = [e];
                this._elementsByName[name] = vs;
            } else {
                vs.push(e);
            }

            if (this._observer !== undefined) {
                this._observer.alloc(this, e);
            }

            return e;
        }

        public element(id: number): IElement {
            return this._elements[id];
        }

        public elementsByName(name: string): IElement[] {
            var v = this._elementsByName[name];
            if (v === undefined) {
                return [];
            }
            return v;
        }

        public addLibrary(func: (document: IDocument, name: string, id: number) => IElement, name?: string) {

            if (name === undefined) {
                this._defaultLibrary = func;
            } else {
                this._librarys[name] = func;
            }

        }

        public set(key: string, elementKey: number) {
            if (elementKey > this._autoKey) {
                this._autoKey = elementKey;
            }
            this._elementKeys[elementKey] = key;
            this._keys[key] = elementKey;
        }

        public elementKey(key: string): number {

            var v = this._keys[key];

            if (v === undefined) {
                v = this._autoKey + 1;
                this._autoKey = v;
                this._elementKeys[v] = key;
                this._keys[key] = v;

                if (this._observer !== undefined) {
                    this._observer.key(this, v, key);
                }
            }

            return v;
        }

        public key(elementKey: number): string {
            return this._elementKeys[elementKey];
        }

        public get elementKeys(): ElementKeyMap {
            return this._elementKeys;
        }

        public recycle(): void {
            this._elements = {};
            this._elementsByName = {};
            if (this._rootElement !== undefined) {
                this._rootElement.recycle();
                this._rootElement = undefined;
            }
        }

        public beginObserver(observer: IDocumentObserver): void {
            this._observer = observer;
        }

        public getObserver(): IDocumentObserver | undefined {
            return this._observer;
        }

        public endObserver(): void {
            this._observer = undefined;
        }

        public removeElement(element: IElement): void {

            var id = element.id;
            var name = element.name;

            delete this._elements[id];

            var vs = this._elementsByName[name];

            if (vs !== undefined) {

                var items: IElement[] = [];

                for (let v of vs) {
                    if (v !== element) {
                        items.push(v);
                    }
                }

                this._elementsByName[name] = items;
            }

        }

    }

}