
namespace kk {

    export class ElementEvent extends Event implements IElementEvent {
        constructor(element?: IElement) {
            super();
            this.element = element;
        }
        public cancelBubble: boolean = false;
        public element: IElement | undefined;
        public data: any;
    }

    export class Element extends EventEmitter implements IElement {

        private _id: number;
        private _name: string;
        private _document: IDocument | undefined;
        private _firstChild: Element | undefined;
        private _lastChild: Element | undefined;
        private _nextSibling: Element | undefined;
        private _prevSibling: Element | undefined;
        private _parent: Element | undefined;
        private _attributes: IAttributeMap = {};
        private _objects: any = {};
        private _levelId: number = 0;
        private _depth: number = 0;
        private _autoLevelId: number = 0;

        constructor(document: IDocument, name: string, id: number) {
            super();
            this._id = id;
            this._name = name;
            this._document = document;
        }

        public get levelId(): number {
            return this._levelId;
        }

        public get depth(): number {
            return this._depth;
        }

        public get id(): number {
            return this._id;
        }

        public get name(): string {
            return this._name;
        }

        public get document(): IDocument | undefined {
            return this._document;
        }

        public get firstChild(): IElement | undefined {
            return this._firstChild;
        }

        public get lastChild(): IElement | undefined {
            return this._lastChild;
        }

        public get nextSibling(): IElement | undefined {
            return this._nextSibling;
        }

        public get prevSibling(): IElement | undefined {
            return this._prevSibling;
        }

        public get parent(): IElement | undefined {
            return this._parent;
        }

        protected onDidAddChildren(element: IElement): void {
            if (element instanceof Element) {
                let e = element as Element;
                e._depth = this._depth + 1;
                e._levelId = this._autoLevelId + 1;
                this._autoLevelId = e._levelId;
            }
        }

        public append(element: IElement): void {

            if (element instanceof Element) {

                var e = element as Element;

                e.remove();

                if (this._lastChild !== undefined) {
                    this._lastChild._nextSibling = e;
                    e._prevSibling = this._lastChild;
                    this._lastChild = e;
                    e._parent = this;
                } else {
                    this._firstChild = e;
                    this._lastChild = e;
                    e._parent = this;
                }

                if (this._document !== undefined) {
                    var v = this._document.getObserver();
                    if (v !== undefined) {
                        v.append(this._document, this, element);
                    }
                }

                this.onDidAddChildren(element);

            }

        }

        before(element: IElement): void {

            if (element instanceof Element) {

                var e = element as Element;

                e.remove();

                if (this._prevSibling !== undefined) {
                    this._prevSibling._nextSibling = e;
                    e._prevSibling = this._prevSibling;
                    e._nextSibling = this;
                    e._parent = this._parent;
                    this._prevSibling = e;
                } else if (this._parent) {
                    e._nextSibling = this;
                    e._parent = this._parent;
                    this._prevSibling = e;
                    this._parent._firstChild = e;
                }

                if (this._parent !== undefined) {

                    if (this._document !== undefined) {
                        var v = this._document.getObserver();
                        if (v !== undefined) {
                            v.before(this._document, this, element);
                        }
                    }

                    this._parent.onDidAddChildren(element);

                }


            }

        }

        after(element: IElement): void {

            if (element instanceof Element) {

                var e = element as Element;

                e.remove();

                if (this._nextSibling !== undefined) {
                    this._nextSibling._prevSibling = e;
                    e._nextSibling = this._nextSibling;
                    e._prevSibling = this;
                    e._parent = this._parent;
                    this._nextSibling = e;
                } else if (this._parent) {
                    e._prevSibling = this;
                    e._parent = this._parent;
                    this._nextSibling = e;
                    this._parent._lastChild = e;
                }

                if (this._parent !== undefined) {

                    if (this._document !== undefined) {
                        var v = this._document.getObserver();
                        if (v !== undefined) {
                            v.after(this._document, this, element);
                        }
                    }

                    this._parent.onDidAddChildren(element);

                }


            }
        }

        protected onWillRemoveChildren(element: IElement): void {

            if (element instanceof Element) {
                let e = element as Element;
                e._depth = 0;
                e._levelId = 0;
            }

        }

        public remove(): void {

            if (this._prevSibling !== undefined && this._parent !== undefined) {
                this._parent.onWillRemoveChildren(this);
                this._prevSibling._nextSibling = this._nextSibling;
                if (this._nextSibling !== undefined) {
                    this._nextSibling._prevSibling = this._prevSibling;
                } else {
                    this._parent._lastChild = this._prevSibling;
                }
            } else if (this._parent !== undefined) {
                this._parent.onWillRemoveChildren(this);
                this._parent._firstChild = this._nextSibling;
                if (this._nextSibling) {
                    this._nextSibling._prevSibling = undefined;
                } else {
                    this._parent._lastChild = undefined;
                }
            }

            if (this._parent) {

                this._parent = undefined;
                this._prevSibling = undefined;
                this._nextSibling = undefined;

                if (this._document !== undefined) {
                    var v = this._document.getObserver();
                    if (v !== undefined) {
                        v.remove(this._document, this._id);
                    }
                }

            }

        }

        public appendTo(element: IElement): void {
            element.append(this);
        }

        public beforeTo(element: IElement): void {
            element.before(this);
        }

        public afterTo(element: IElement): void {
            element.after(this);
        }

        public get(key: string | number): string | undefined {
            if (typeof key == 'number') {
                if (this._document) {
                    key = this._document.key(key);
                } else {
                    return undefined;
                }
            }
            return this._attributes[key];
        }

        public set(key: string | number, value?: string) {
            if (typeof key == 'number') {
                if (this._document) {
                    key = this._document.key(key);
                } else {
                    return;
                }
            }
            if (value === undefined) {
                delete this._attributes[key];
            } else {
                this._attributes[key] = value;
            }
        }

        public get attributes(): IAttributeMap {
            return this._attributes;
        }

        public emit(name: string, event: IEvent): void {
            if (event instanceof ElementEvent) {
                var e = event as ElementEvent;
                if (e.element === undefined) {
                    e.element = this;
                }
            }
            super.emit(name, event);
            if (event instanceof ElementEvent) {
                var e = event as ElementEvent;
                if (!e.cancelBubble) {
                    if (this._parent !== undefined) {
                        this._parent.emit(name, event);
                    } else if (this._document !== undefined) {
                        this._document.emit(name, event);
                    }
                }
            }
        }

        public hasBubble(name: string): boolean {
            if (super.has(name)) {
                return true;
            }
            if (this._parent !== undefined) {
                return this._parent.hasBubble(name);
            }
            if (this._document !== undefined) {
                return this._document.has(name);
            }
            return false;
        }

        public object(key: string) {
            return this._objects[key];
        }

        public setObject(key: string, object: any): void {
            if (object === undefined) {
                delete this._objects[key];
            } else {
                this._objects[key] = object;
            }
        }

        public recycle(): void {

            var p = this._firstChild;

            while (p !== undefined) {
                let n = p._nextSibling;
                p.recycle();
                p = n;
            }

            if (this._document) {
                this._document.removeElement(this);
            }

            this._document = undefined;
            this._parent = undefined;
            this._firstChild = undefined;
            this._lastChild = undefined;
            this._prevSibling = undefined;
            this._nextSibling = undefined;
            this._parent = undefined;
        }

    }
}
