"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var kk;
(function (kk) {
    var Event = /** @class */ (function () {
        function Event() {
        }
        return Event;
    }());
    kk.Event = Event;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this._events = {};
        }
        EventEmitter.prototype.on = function (name, func) {
            var v = this._events[name];
            if (v === undefined) {
                v = [];
                this._events[name] = v;
            }
            v.push(func);
        };
        EventEmitter.prototype.off = function (name, func) {
            if (name === undefined && func === undefined) {
                this._events = {};
            }
            else if (func === undefined && name !== undefined) {
                delete this._events[name];
            }
            else if (name !== undefined) {
                var v = this._events[name];
                if (v !== undefined) {
                    var vs = [];
                    for (var _i = 0, v_1 = v; _i < v_1.length; _i++) {
                        var fn = v_1[_i];
                        if (fn != func) {
                            vs.push(fn);
                        }
                    }
                    this._events[name] = vs;
                }
            }
        };
        EventEmitter.prototype.emit = function (name, event) {
            var v = this._events[name];
            if (v !== undefined) {
                var vs = v.slice();
                for (var _i = 0, vs_1 = vs; _i < vs_1.length; _i++) {
                    var fn = vs_1[_i];
                    fn(event);
                }
            }
        };
        EventEmitter.prototype.has = function (name) {
            return this._events[name] !== undefined;
        };
        return EventEmitter;
    }());
    kk.EventEmitter = EventEmitter;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ElementEvent = /** @class */ (function (_super) {
        __extends(ElementEvent, _super);
        function ElementEvent(element) {
            var _this = _super.call(this) || this;
            _this.cancelBubble = false;
            _this.element = element;
            return _this;
        }
        return ElementEvent;
    }(kk.Event));
    kk.ElementEvent = ElementEvent;
    var Element = /** @class */ (function (_super) {
        __extends(Element, _super);
        function Element(document, name, id) {
            var _this = _super.call(this) || this;
            _this._attributes = {};
            _this._objects = {};
            _this._levelId = 0;
            _this._depth = 0;
            _this._autoLevelId = 0;
            _this._id = id;
            _this._name = name;
            _this._document = document;
            return _this;
        }
        Object.defineProperty(Element.prototype, "levelId", {
            get: function () {
                return this._levelId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "depth", {
            get: function () {
                return this._depth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "document", {
            get: function () {
                return this._document;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "firstChild", {
            get: function () {
                return this._firstChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "lastChild", {
            get: function () {
                return this._lastChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "nextSibling", {
            get: function () {
                return this._nextSibling;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "prevSibling", {
            get: function () {
                return this._prevSibling;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.onDidAddChildren = function (element) {
            if (element instanceof Element) {
                var e = element;
                e._depth = this._depth + 1;
                e._levelId = this._autoLevelId + 1;
                this._autoLevelId = e._levelId;
            }
        };
        Element.prototype.append = function (element) {
            if (element instanceof Element) {
                var e = element;
                e.remove();
                if (this._lastChild !== undefined) {
                    this._lastChild._nextSibling = e;
                    e._prevSibling = this._lastChild;
                    this._lastChild = e;
                    e._parent = this;
                }
                else {
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
        };
        Element.prototype.before = function (element) {
            if (element instanceof Element) {
                var e = element;
                e.remove();
                if (this._prevSibling !== undefined) {
                    this._prevSibling._nextSibling = e;
                    e._prevSibling = this._prevSibling;
                    e._nextSibling = this;
                    e._parent = this._parent;
                    this._prevSibling = e;
                }
                else if (this._parent) {
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
        };
        Element.prototype.after = function (element) {
            if (element instanceof Element) {
                var e = element;
                e.remove();
                if (this._nextSibling !== undefined) {
                    this._nextSibling._prevSibling = e;
                    e._nextSibling = this._nextSibling;
                    e._prevSibling = this;
                    e._parent = this._parent;
                    this._nextSibling = e;
                }
                else if (this._parent) {
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
        };
        Element.prototype.onWillRemoveChildren = function (element) {
            if (element instanceof Element) {
                var e = element;
                e._depth = 0;
                e._levelId = 0;
            }
        };
        Element.prototype.remove = function () {
            if (this._prevSibling !== undefined && this._parent !== undefined) {
                this._parent.onWillRemoveChildren(this);
                this._prevSibling._nextSibling = this._nextSibling;
                if (this._nextSibling !== undefined) {
                    this._nextSibling._prevSibling = this._prevSibling;
                }
                else {
                    this._parent._lastChild = this._prevSibling;
                }
            }
            else if (this._parent !== undefined) {
                this._parent.onWillRemoveChildren(this);
                this._parent._firstChild = this._nextSibling;
                if (this._nextSibling) {
                    this._nextSibling._prevSibling = undefined;
                }
                else {
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
        };
        Element.prototype.appendTo = function (element) {
            element.append(this);
        };
        Element.prototype.beforeTo = function (element) {
            element.before(this);
        };
        Element.prototype.afterTo = function (element) {
            element.after(this);
        };
        Element.prototype.get = function (key) {
            if (typeof key == 'number') {
                if (this._document) {
                    key = this._document.key(key);
                }
                else {
                    return undefined;
                }
            }
            return this._attributes[key];
        };
        Element.prototype.set = function (key, value) {
            if (typeof key == 'number') {
                if (this._document) {
                    key = this._document.key(key);
                }
                else {
                    return;
                }
            }
            if (value === undefined) {
                delete this._attributes[key];
            }
            else {
                this._attributes[key] = value;
            }
        };
        Object.defineProperty(Element.prototype, "attributes", {
            get: function () {
                return this._attributes;
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.emit = function (name, event) {
            if (event instanceof ElementEvent) {
                var e = event;
                if (e.element === undefined) {
                    e.element = this;
                }
            }
            _super.prototype.emit.call(this, name, event);
            if (event instanceof ElementEvent) {
                var e = event;
                if (!e.cancelBubble) {
                    if (this._parent !== undefined) {
                        this._parent.emit(name, event);
                    }
                    else if (this._document !== undefined) {
                        this._document.emit(name, event);
                    }
                }
            }
        };
        Element.prototype.hasBubble = function (name) {
            if (_super.prototype.has.call(this, name)) {
                return true;
            }
            if (this._parent !== undefined) {
                return this._parent.hasBubble(name);
            }
            if (this._document !== undefined) {
                return this._document.has(name);
            }
            return false;
        };
        Element.prototype.object = function (key) {
            return this._objects[key];
        };
        Element.prototype.setObject = function (key, object) {
            if (object === undefined) {
                delete this._objects[key];
            }
            else {
                this._objects[key] = object;
            }
        };
        Element.prototype.recycle = function () {
            var p = this._firstChild;
            while (p !== undefined) {
                var n = p._nextSibling;
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
        };
        return Element;
    }(kk.EventEmitter));
    kk.Element = Element;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var StyleElement = /** @class */ (function (_super) {
        __extends(StyleElement, _super);
        function StyleElement() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._styles = {};
            return _this;
        }
        StyleElement.prototype.style = function (name) {
            var v = this._styles[name];
            if (v === undefined) {
                v = {};
                this._styles[name] = v;
            }
            return v;
        };
        Object.defineProperty(StyleElement.prototype, "status", {
            get: function () {
                var v = this.get("status");
                if (v === undefined) {
                    v = this.get("in-status");
                }
                if (v === undefined) {
                    return "";
                }
                return v;
            },
            enumerable: true,
            configurable: true
        });
        StyleElement.prototype.addStatus = function (status) {
            var v = this.get("status");
            if (v === undefined) {
                this.set("status", status);
            }
            else {
                var vs = v.split(" ");
                var i = vs.indexOf(status);
                if (i < 0) {
                    vs.push(status);
                    this.set("status", vs.join(" "));
                }
            }
        };
        StyleElement.prototype.setStatus = function (status) {
            this.set("status", status);
        };
        StyleElement.prototype.removeStatus = function (status) {
            var v = this.get("status");
            if (v === undefined) {
                this.set("status", status);
            }
            else {
                var vs = v.split(" ");
                var items = [];
                for (var _i = 0, vs_2 = vs; _i < vs_2.length; _i++) {
                    var v_2 = vs_2[_i];
                    if (v_2 != status) {
                        items.push(v_2);
                    }
                }
                this.set("status", items.join(" "));
            }
        };
        StyleElement.prototype.hasStatus = function (status) {
            var v = this.get("status");
            if (v === undefined) {
                return false;
            }
            else {
                var vs = v.split(" ");
                return vs.indexOf(status) >= 0;
            }
        };
        StyleElement.prototype.changedStatus = function () {
            var keyMap = {};
            var keys = [];
            var v = this.status;
            var vs = [""];
            if (v !== "") {
                vs = vs.concat(v.split(" "));
            }
            for (var _i = 0, vs_3 = vs; _i < vs_3.length; _i++) {
                var s = vs_3[_i];
                var style = this._styles[s];
                if (style !== undefined) {
                    for (var key in style) {
                        if (keyMap[key] === undefined) {
                            keys.push(key);
                            keyMap[key] = key;
                        }
                    }
                }
            }
            this.changedKeys(keys);
            var p = this.firstChild;
            while (p !== undefined) {
                if (p instanceof StyleElement) {
                    if (p.get("status") === undefined) {
                        p.set("in-status", v);
                    }
                }
                p = p.nextSibling;
            }
        };
        StyleElement.prototype.set = function (key, value) {
            if (typeof key == 'number') {
                if (this.document) {
                    key = this.document.key(key);
                }
                else {
                    return;
                }
            }
            _super.prototype.set.call(this, key, value);
            this.changedKey(key);
        };
        StyleElement.prototype.changedKey = function (key) {
        };
        StyleElement.prototype.changedKeys = function (keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                this.changedKey(key);
            }
        };
        StyleElement.prototype.get = function (key) {
            if (typeof key == 'number') {
                if (this.document) {
                    key = this.document.key(key);
                }
                else {
                    return undefined;
                }
            }
            var v = _super.prototype.get.call(this, key);
            if (v !== undefined) {
                return v;
            }
            var s = _super.prototype.get.call(this, "status");
            if (s === undefined) {
                s = _super.prototype.get.call(this, "in-status");
            }
            var vs;
            if (s != undefined) {
                vs = s.split(" ");
                if (vs[0] != "") {
                    vs.push("");
                }
            }
            else {
                vs = [""];
            }
            for (var _i = 0, vs_4 = vs; _i < vs_4.length; _i++) {
                s = vs_4[_i];
                var style = this._styles[s];
                if (style !== undefined) {
                    v = style[key];
                    if (v !== undefined) {
                        return v;
                    }
                }
            }
        };
        StyleElement.prototype.onDidAddChildren = function (element) {
            _super.prototype.onDidAddChildren.call(this, element);
            var s = this.get("status");
            if (s !== undefined) {
                var v = element.get("status");
                if (v === undefined) {
                    element.set("in-status", s);
                }
            }
        };
        StyleElement.prototype.keys = function () {
            var keyMap = {};
            var keys = [];
            for (var key in this.attributes) {
                keys.push(key);
                keyMap[key] = key;
            }
            for (var s in this._styles) {
                var style = this._styles[s];
                for (var key in style) {
                    if (keyMap[key] === undefined) {
                        keys.push(key);
                        keyMap[key] = key;
                    }
                }
            }
            return keys;
        };
        return StyleElement;
    }(kk.Element));
    kk.StyleElement = StyleElement;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var Document = /** @class */ (function (_super) {
        __extends(Document, _super);
        function Document() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._librarys = {};
            _this._autoKey = 0;
            _this._elements = {};
            _this._elementsByName = {};
            _this._elementKeys = {};
            _this._keys = {};
            return _this;
        }
        Object.defineProperty(Document.prototype, "rootElement", {
            get: function () {
                return this._rootElement;
            },
            set: function (element) {
                this._rootElement = element;
            },
            enumerable: true,
            configurable: true
        });
        Document.prototype.createElement = function (name, id) {
            if (id === undefined) {
                id = this._autoKey + 1;
                this._autoKey = id;
            }
            else if (id > this._autoKey) {
                this._autoKey = id;
            }
            var fn = this._librarys[name];
            var e;
            if (fn !== undefined) {
                e = fn(this, name, id);
            }
            if (e === undefined) {
                if (this._defaultLibrary !== undefined) {
                    e = this._defaultLibrary(this, name, id);
                }
            }
            if (e === undefined) {
                e = new kk.Element(this, name, id);
            }
            this._elements[id] = e;
            var vs = this._elementsByName[name];
            if (vs === undefined) {
                vs = [e];
                this._elementsByName[name] = vs;
            }
            else {
                vs.push(e);
            }
            if (this._observer !== undefined) {
                this._observer.alloc(this, e);
            }
            return e;
        };
        Document.prototype.element = function (id) {
            return this._elements[id];
        };
        Document.prototype.elementsByName = function (name) {
            var v = this._elementsByName[name];
            if (v === undefined) {
                return [];
            }
            return v;
        };
        Document.prototype.addLibrary = function (func, name) {
            if (name === undefined) {
                this._defaultLibrary = func;
            }
            else {
                this._librarys[name] = func;
            }
        };
        Document.prototype.set = function (key, elementKey) {
            if (elementKey > this._autoKey) {
                this._autoKey = elementKey;
            }
            this._elementKeys[elementKey] = key;
            this._keys[key] = elementKey;
        };
        Document.prototype.elementKey = function (key) {
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
        };
        Document.prototype.key = function (elementKey) {
            return this._elementKeys[elementKey];
        };
        Object.defineProperty(Document.prototype, "elementKeys", {
            get: function () {
                return this._elementKeys;
            },
            enumerable: true,
            configurable: true
        });
        Document.prototype.recycle = function () {
            this._elements = {};
            this._elementsByName = {};
            if (this._rootElement !== undefined) {
                this._rootElement.recycle();
                this._rootElement = undefined;
            }
        };
        Document.prototype.beginObserver = function (observer) {
            this._observer = observer;
        };
        Document.prototype.getObserver = function () {
            return this._observer;
        };
        Document.prototype.endObserver = function () {
            this._observer = undefined;
        };
        Document.prototype.removeElement = function (element) {
            var id = element.id;
            var name = element.name;
            delete this._elements[id];
            var vs = this._elementsByName[name];
            if (vs !== undefined) {
                var items = [];
                for (var _i = 0, vs_5 = vs; _i < vs_5.length; _i++) {
                    var v = vs_5[_i];
                    if (v !== element) {
                        items.push(v);
                    }
                }
                this._elementsByName[name] = items;
            }
        };
        return Document;
    }(kk.EventEmitter));
    kk.Document = Document;
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        var layouts = {
            relative: ui.LayoutRelative,
            flex: ui.LayoutFlex,
            horizontal: ui.LayoutHorizontal,
        };
        function getLayout(value) {
            if (typeof value == 'string') {
                return layouts[value];
            }
            return undefined;
        }
        var LayoutElement = /** @class */ (function (_super) {
            __extends(LayoutElement, _super);
            function LayoutElement(document, name, id) {
                var _this = _super.call(this, document, name, id) || this;
                _this._frame = { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } };
                _this._contentSize = { width: 0, height: 0 };
                _this._contentOffset = { x: 0, y: 0 };
                _this._padding = { top: { value: 0, type: ui.PixelType.Auto }, right: { value: 0, type: ui.PixelType.Auto }, bottom: { value: 0, type: ui.PixelType.Auto }, left: { value: 0, type: ui.PixelType.Auto } };
                _this._margin = { top: { value: 0, type: ui.PixelType.Auto }, right: { value: 0, type: ui.PixelType.Auto }, bottom: { value: 0, type: ui.PixelType.Auto }, left: { value: 0, type: ui.PixelType.Auto } };
                _this._width = { value: 0, type: ui.PixelType.Auto };
                _this._height = { value: 0, type: ui.PixelType.Auto };
                _this._minWidth = { value: 0, type: ui.PixelType.Auto };
                _this._maxWidth = { value: 0, type: ui.PixelType.Auto };
                _this._minHeight = { value: 0, type: ui.PixelType.Auto };
                _this._maxHeight = { value: 0, type: ui.PixelType.Auto };
                _this._left = { value: 0, type: ui.PixelType.Auto };
                _this._top = { value: 0, type: ui.PixelType.Auto };
                _this._right = { value: 0, type: ui.PixelType.Auto };
                _this._bottom = { value: 0, type: ui.PixelType.Auto };
                _this._verticalAlign = ui.VerticalAlign.Top;
                _this._position = ui.Position.None;
                _this.layoutFunc = ui.LayoutRelative;
                return _this;
            }
            Object.defineProperty(LayoutElement.prototype, "frame", {
                get: function () {
                    return this._frame;
                },
                set: function (value) {
                    this._frame = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "contentSize", {
                get: function () {
                    return this._contentSize;
                },
                set: function (value) {
                    this._contentSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "contentOffset", {
                get: function () {
                    return this._contentOffset;
                },
                set: function (value) {
                    this._contentOffset = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "padding", {
                get: function () {
                    return this._padding;
                },
                set: function (value) {
                    this._padding = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "margin", {
                get: function () {
                    return this._margin;
                },
                set: function (value) {
                    this._margin = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "width", {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "height", {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "minWidth", {
                get: function () {
                    return this._minWidth;
                },
                set: function (value) {
                    this._minWidth = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "maxWidth", {
                get: function () {
                    return this._maxWidth;
                },
                set: function (value) {
                    this._maxWidth = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "minHeight", {
                get: function () {
                    return this._minHeight;
                },
                set: function (value) {
                    this._minHeight = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "maxHeight", {
                get: function () {
                    return this._maxHeight;
                },
                set: function (value) {
                    this._maxHeight = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "left", {
                get: function () {
                    return this._left;
                },
                set: function (value) {
                    this._left = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "top", {
                get: function () {
                    return this._top;
                },
                set: function (value) {
                    this._top = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "right", {
                get: function () {
                    return this._right;
                },
                set: function (value) {
                    this._right = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "bottom", {
                get: function () {
                    return this._bottom;
                },
                set: function (value) {
                    this._bottom = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "verticalAlign", {
                get: function () {
                    return this._verticalAlign;
                },
                set: function (value) {
                    this._verticalAlign = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "position", {
                get: function () {
                    return this._position;
                },
                set: function (value) {
                    this._position = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "layoutFunc", {
                get: function () {
                    return this._layoutFunc;
                },
                set: function (value) {
                    this._layoutFunc = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayoutElement.prototype, "hidden", {
                get: function () {
                    return ui.booleanValue(this.get("hidden"), false);
                },
                enumerable: true,
                configurable: true
            });
            LayoutElement.prototype.layoutChildren = function (unit) {
                if (this._layoutFunc) {
                    this._contentSize = this._layoutFunc(this, unit);
                }
            };
            LayoutElement.prototype.layout = function (unit, size) {
                if (size !== undefined) {
                    this._frame.size = size;
                }
                this.layoutChildren(unit);
                this.didLayouted();
            };
            LayoutElement.prototype.didLayouted = function () {
            };
            LayoutElement.prototype.changedKey = function (key) {
                switch (key) {
                    case "padding":
                        this._padding = ui.parseEdge(this.get(key));
                        break;
                    case "margin":
                        this._margin = ui.parseEdge(this.get(key));
                        break;
                    case "width":
                        this._width = ui.parsePixel(this.get(key));
                        break;
                    case "height":
                        this._height = ui.parsePixel(this.get(key));
                        break;
                    case "min-width":
                        this._minWidth = ui.parsePixel(this.get(key));
                        break;
                    case "max-width":
                        this._maxWidth = ui.parsePixel(this.get(key));
                        break;
                    case "min-height":
                        this._minHeight = ui.parsePixel(this.get(key));
                        break;
                    case "max-height":
                        this._maxHeight = ui.parsePixel(this.get(key));
                        break;
                    case "left":
                        this._left = ui.parsePixel(this.get(key));
                        break;
                    case "top":
                        this._top = ui.parsePixel(this.get(key));
                        break;
                    case "right":
                        this._right = ui.parsePixel(this.get(key));
                        break;
                    case "bottom":
                        this._bottom = ui.parsePixel(this.get(key));
                        break;
                    case "vertical-align":
                        this._verticalAlign = ui.parseVerticalAlign(this.get(key));
                        break;
                    case "position":
                        this._position = ui.parsePosition(this.get(key));
                        break;
                    case "layout":
                        this.layoutFunc = getLayout(this.get(key));
                        break;
                }
                _super.prototype.changedKey.call(this, key);
            };
            return LayoutElement;
        }(kk.StyleElement));
        ui.LayoutElement = LayoutElement;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        var ReuseLayer = /** @class */ (function () {
            function ReuseLayer() {
                this._layers = {};
            }
            ReuseLayer.prototype.popLayer = function (reuse) {
                var vs = this._layers[reuse];
                if (vs !== undefined) {
                    return vs.shift();
                }
            };
            ReuseLayer.prototype.addLayer = function (reuse, layer) {
                var vs = this._layers[reuse];
                if (vs === undefined) {
                    this._layers[reuse] = [layer];
                }
                else {
                    vs.push(layer);
                }
            };
            ReuseLayer.get = function (element, autocreate) {
                if (autocreate === void 0) { autocreate = true; }
                var v = element.object("ReuseLayer");
                if (autocreate && (v === undefined || !(v instanceof ReuseLayer))) {
                    v = new ReuseLayer();
                    element.setObject("ReuseLayer", v);
                }
                return v;
            };
            return ReuseLayer;
        }());
        var LayerElement = /** @class */ (function (_super) {
            __extends(LayerElement, _super);
            function LayerElement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(LayerElement.prototype, "layerClass", {
                get: function () {
                    return Layer.className;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayerElement.prototype, "reuse", {
                get: function () {
                    var v = this.get("reuse");
                    if (v === undefined && this.levelId != 0) {
                        v = this.layerClass + "_" + this.levelId;
                    }
                    return v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LayerElement.prototype, "layer", {
                get: function () {
                    return this._layer;
                },
                enumerable: true,
                configurable: true
            });
            LayerElement.prototype.invalidate = function () {
                var event = new kk.ElementEvent(this);
                this.emit("invalidate", event);
            };
            LayerElement.prototype.changedKey = function (key) {
                _super.prototype.changedKey.call(this, key);
                if (this._layer !== undefined) {
                    this.layerChangedKey(key, this._layer);
                }
            };
            LayerElement.prototype.layerChangedKey = function (key, layer) {
                switch (key) {
                    case "background-color":
                        layer.backgroundColor = ui.parseColor(this.get(key));
                        break;
                    case "border-color":
                        layer.borderColor = ui.parseColor(this.get(key));
                        break;
                    case "border-width":
                        layer.borderWidth = ui.parsePixel(this.get(key));
                        break;
                    case "border-radius":
                        layer.borderRadius = ui.parsePixel(this.get(key));
                        break;
                    case "opacity":
                        layer.opacity = parseFloat(this.get(key));
                        break;
                }
            };
            LayerElement.prototype.didLayouted = function () {
                _super.prototype.didLayouted.call(this);
                if (this._layer !== undefined) {
                    this.layerDidLayouted(this._layer);
                }
            };
            LayerElement.prototype.layerDidLayouted = function (layer) {
                layer.frame = this.frame;
            };
            LayerElement.prototype.isVisibleChildren = function (element) {
                var left = element.frame.origin.x - this.contentOffset.x;
                var top = element.frame.origin.y - this.contentOffset.y;
                var right = left + element.frame.size.width;
                var bottom = left + element.frame.size.height;
                left = Math.max(left, 0);
                top = Math.max(top, 0);
                right = Math.min(right, this.frame.size.width);
                bottom = Math.min(bottom, this.frame.size.height);
                return right > left && bottom > top;
            };
            LayerElement.prototype.createLayer = function () {
                return new Layer();
            };
            LayerElement.prototype.obtainLayer = function () {
                if (this._layer !== undefined) {
                    return;
                }
                var v;
                var reuse = this.reuse;
                if (reuse !== undefined && this.parent !== undefined) {
                    var reuseLayer = ReuseLayer.get(this.parent, true);
                    v = reuseLayer.popLayer(reuse);
                }
                if (v === undefined) {
                    v = this.createLayer();
                }
                this._layer = v;
                this.layerDidLayouted(v);
                for (var _i = 0, _a = this.keys(); _i < _a.length; _i++) {
                    var key = _a[_i];
                    this.layerChangedKey(key, v);
                }
            };
            LayerElement.prototype.recycleLayer = function () {
                if (this._layer === undefined) {
                    return;
                }
                var reuse = this.reuse;
                if (reuse !== undefined && this.parent !== undefined) {
                    var reuseLayer = ReuseLayer.get(this.parent, true);
                    reuseLayer.addLayer(reuse, this._layer);
                }
                this._layer = undefined;
            };
            LayerElement.prototype.display = function (context) {
                if (this._layer === undefined) {
                    this.obtainLayer();
                }
                this._layer.display(context);
                var e = this.firstChild;
                while (e) {
                    if (e instanceof LayerElement) {
                        if (this.isVisibleChildren(e)) {
                            e.display(context);
                        }
                        else {
                            e.recycleLayer();
                        }
                    }
                    e = e.nextSibling;
                }
            };
            return LayerElement;
        }(ui.LayoutElement));
        ui.LayerElement = LayerElement;
        var Layer = /** @class */ (function () {
            function Layer() {
                this._backgroundColor = { r: 0, g: 0, b: 0, a: 0 };
                this._contentsRect = { origin: { x: 0, y: 0 }, size: { width: 1, height: 1 } };
                this._contentsCenter = { origin: { x: 0, y: 0 }, size: { width: 1, height: 1 } };
                this._opacity = 1.0;
                this._hidden = false;
                this._borderWidth = { value: 0, type: ui.PixelType.Auto };
                this._borderRadius = { value: 0, type: ui.PixelType.Auto };
                this._borderColor = { r: 0, g: 0, b: 0, a: 0 };
                this._shadowColor = { r: 0, g: 0, b: 0, a: 0 };
                this._shadowOffset = { x: 0, y: 0 };
                this._shadowBlur = { value: 0, type: ui.PixelType.Auto };
                this._invalidate = true;
                this._allowDraw = false;
                this._frame = { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } };
            }
            Object.defineProperty(Layer.prototype, "backgroundColor", {
                get: function () {
                    return this._backgroundColor;
                },
                set: function (v) {
                    this._backgroundColor = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "contents", {
                get: function () {
                    return this._contents;
                },
                set: function (v) {
                    this._contents = v;
                    if (v !== undefined) {
                        this._allowDraw = false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "contentsRect", {
                get: function () {
                    return this._contentsRect;
                },
                set: function (value) {
                    this._contentsRect = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "contentsCenter", {
                get: function () {
                    return this._contentsCenter;
                },
                set: function (value) {
                    this._contentsCenter = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "opacity", {
                get: function () {
                    return this._opacity;
                },
                set: function (value) {
                    this._opacity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "hidden", {
                get: function () {
                    return this._hidden;
                },
                set: function (value) {
                    this._hidden = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "borderWidth", {
                get: function () {
                    return this._borderWidth;
                },
                set: function (value) {
                    this._borderWidth = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "borderRadius", {
                get: function () {
                    return this._borderRadius;
                },
                set: function (value) {
                    this._borderRadius = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "borderColor", {
                get: function () {
                    return this._borderColor;
                },
                set: function (value) {
                    this._borderColor = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "shadowColor", {
                get: function () {
                    return this._shadowColor;
                },
                set: function (value) {
                    this._shadowColor = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "shadowOffset", {
                get: function () {
                    return this._shadowOffset;
                },
                set: function (value) {
                    this._shadowOffset = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "shadowBlur", {
                get: function () {
                    return this._shadowBlur;
                },
                set: function (value) {
                    this._shadowBlur = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "allowDraw", {
                get: function () {
                    return this._allowDraw;
                },
                set: function (value) {
                    this._allowDraw = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "frame", {
                get: function () {
                    return this._frame;
                },
                set: function (value) {
                    this._frame = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Layer.prototype, "className", {
                get: function () {
                    return Layer.className;
                },
                enumerable: true,
                configurable: true
            });
            Layer.prototype.draw = function (context, canvas) {
            };
            Layer.prototype.display = function (context) {
                if (this._invalidate
                    && this._allowDraw
                    && this._frame.size.width > 0 && this._frame.size.height > 0) {
                    var canvas = context.createCanvas(this._frame.size.width, this._frame.size.height);
                    this.draw(context, canvas);
                    this._contents = canvas.toImage();
                    this._invalidate = false;
                }
                context.drawLayer(this);
            };
            Layer.prototype.invalidate = function () {
                this._invalidate = true;
            };
            Layer.className = "Layer";
            return Layer;
        }());
        ui.Layer = Layer;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        var Context = /** @class */ (function () {
            function Context(canvas) {
                this.UnitPX = 1.0;
                this.UnitRPX = 1.0;
                this.UnitVW = 1.0;
                this.UnitVH = 1.0;
                this._projection = new Float32Array(16);
                this._canvas = canvas;
                this._GLContext = canvas.getContext("webgl");
                this._programLayer = new ui.GLProgramLayer(this._GLContext);
                this._GLContext.clearColor(0, 0, 0, 0);
            }
            Context.prototype.createCanvas = function (width, height) {
                return this._canvas.createCanvas(width, height);
            };
            Context.prototype.getContext = function (name) {
                return this._canvas.getContext(name);
            };
            Context.prototype.display = function (element) {
                this._GLContext.clear(this._GLContext.COLOR_BUFFER_BIT);
                if (element instanceof ui.LayerElement) {
                    var e = element;
                    e.display(this);
                }
            };
            Context.prototype.drawLayer = function (layer) {
                this._programLayer.drawLayer(this, layer);
            };
            Object.defineProperty(Context.prototype, "width", {
                get: function () {
                    return this._canvas.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Context.prototype, "height", {
                get: function () {
                    return this._canvas.height;
                },
                enumerable: true,
                configurable: true
            });
            Context.prototype.layout = function (element) {
                var width = this.width;
                var height = this.height;
                this.UnitVH = width * 0.01;
                this.UnitVW = height * 0.01;
                this._projection = new Float32Array([
                    2 / width, 0, 0, 0,
                    0, -2 / height, 0, 0,
                    0, 0, -0.0001, 0,
                    -1, 1, 0, 1,
                ]);
                this._GLContext.viewport(0, 0, width, height);
                if (element instanceof ui.LayoutElement) {
                    var e = element;
                    e.layout(this, { width: width, height: height });
                }
            };
            Object.defineProperty(Context.prototype, "opacity", {
                get: function () {
                    return 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Context.prototype, "projection", {
                get: function () {
                    return this._projection;
                },
                enumerable: true,
                configurable: true
            });
            return Context;
        }());
        ui.Context = Context;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        function run(canvas, document, scale, fitSize, frames) {
            if (scale === void 0) { scale = 1; }
            if (fitSize === void 0) { fitSize = 0; }
            if (frames === void 0) { frames = 60; }
            var ctx = new ui.Context(canvas);
            var invalidate = true;
            ctx.UnitPX = scale;
            ctx.UnitRPX = ctx.UnitPX;
            canvas.onresize = function (width, height) {
                if (fitSize > 0) {
                    ctx.UnitRPX = Math.min(width, height) / fitSize;
                }
                var e = document.rootElement;
                if (e != null) {
                    ctx.layout(e);
                }
                invalidate = true;
            };
            document.on("invalidate", function (event) {
                invalidate = true;
            });
            return setInterval(function () {
                var e = document.rootElement;
                if (invalidate && e != null) {
                    invalidate = false;
                    ctx.display(e);
                }
            }, 1000 / frames);
        }
        ui.run = run;
        function openlibs(document) {
            document.addLibrary(function (document, name, id) {
                return new ui.LayerElement(document, name, id);
            }, "view");
        }
        ui.openlibs = openlibs;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        function GLError(context) {
            var v = context.getError();
            if (v) {
                throw new Error("[WebGL] [ERROR] 0x" + v.toString(10));
            }
        }
        var GLProgramLayer = /** @class */ (function () {
            function GLProgramLayer(context) {
                this.context = context;
                this.texture = context.createTexture();
                GLError(context);
                context.bindTexture(context.TEXTURE_2D, this.texture);
                GLError(context);
                context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, 1, 1, 0, context.RGBA, context.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
                GLError(context);
                context.bindTexture(context.TEXTURE_2D, null);
                GLError(context);
                this.buffer = context.createBuffer();
                GLError(context);
                this.program = ui.createGLProgram(context, "\nattribute vec4 position;\nattribute vec2 texCoord;\n\nuniform mat4 projection;\nuniform\tmat4 view;\n\n#ifdef GL_ES\nvarying mediump vec2 vTexCoord;\n#else\nvarying vec2 vTexCoord;\n#endif\n\nvoid main()\n{\n    gl_Position = projection * view * position;\n\tvTexCoord = texCoord;\n}\n                    ", "\n             \n#ifdef GL_ES\nprecision lowp float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform vec4 backgroundColor;\nuniform sampler2D contents;\nuniform float opacity;\n\nvoid main()\n{\n\tgl_FragColor = (texture2D(contents, vTexCoord) + backgroundColor) * opacity;\n}\n\n                    ");
                GLError(context);
                this.position = context.getAttribLocation(this.program, "position");
                GLError(context);
                this.texCoord = context.getAttribLocation(this.program, "texCoord");
                GLError(context);
                this.projection = context.getUniformLocation(this.program, "projection");
                GLError(context);
                this.view = context.getUniformLocation(this.program, "view");
                GLError(context);
                this.backgroundColor = context.getUniformLocation(this.program, "backgroundColor");
                GLError(context);
                this.contents = context.getUniformLocation(this.program, "contents");
                GLError(context);
                this.opacity = context.getUniformLocation(this.program, "opacity");
                GLError(context);
            }
            GLProgramLayer.prototype.drawLayer = function (context, layer) {
                var ctx = this.context;
                var view = new Float32Array([
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1,
                ]);
                ctx.useProgram(this.program);
                GLError(ctx);
                ctx.activeTexture(ctx.TEXTURE0);
                GLError(ctx);
                ctx.bindTexture(ctx.TEXTURE_2D, this.texture);
                GLError(ctx);
                ctx.uniformMatrix4fv(this.projection, false, context.projection);
                GLError(ctx);
                ctx.uniformMatrix4fv(this.view, false, view);
                GLError(ctx);
                ctx.uniform1i(this.contents, 0);
                GLError(ctx);
                ctx.uniform4f(this.backgroundColor, layer.backgroundColor.r, layer.backgroundColor.g, layer.backgroundColor.b, layer.backgroundColor.a);
                GLError(ctx);
                ctx.uniform1f(this.opacity, layer.opacity);
                GLError(ctx);
                var left = layer.frame.origin.x;
                var top = layer.frame.origin.y;
                var right = left + layer.frame.size.width;
                var bottom = top + layer.frame.size.height;
                var sleft = layer.contentsRect.origin.x;
                var stop = layer.contentsRect.origin.y;
                var sright = layer.contentsRect.origin.x + layer.contentsRect.size.width;
                var sbottom = layer.contentsRect.origin.y + layer.contentsRect.size.height;
                ctx.bindBuffer(ctx.ARRAY_BUFFER, this.buffer);
                GLError(ctx);
                ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([
                    left, bottom, 0, sleft, sbottom,
                    left, top, 0, sleft, stop,
                    right, bottom, 0, sright, sbottom,
                    right, top, 0, sleft, stop,
                ]), ctx.STATIC_DRAW);
                GLError(ctx);
                ctx.enableVertexAttribArray(this.position);
                GLError(ctx);
                ctx.vertexAttribPointer(this.position, 3, ctx.FLOAT, false, 5 * 4, 0);
                GLError(ctx);
                ctx.enableVertexAttribArray(this.texCoord);
                GLError(ctx);
                ctx.vertexAttribPointer(this.texCoord, 2, ctx.FLOAT, false, 5 * 4, 3 * 4);
                GLError(ctx);
                ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
                GLError(ctx);
            };
            return GLProgramLayer;
        }());
        ui.GLProgramLayer = GLProgramLayer;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        var GLProgram = /** @class */ (function (_super) {
            __extends(GLProgram, _super);
            function GLProgram(ctx, vshSource, fshSource) {
                return _super.call(this) || this;
            }
            return GLProgram;
        }(Object));
        ui.GLProgram = GLProgram;
        function createGLProgram(ctx, vshSource, fshSource) {
            var vsh = ctx.createShader(ctx.VERTEX_SHADER);
            ctx.shaderSource(vsh, vshSource);
            ctx.compileShader(vsh);
            if (!ctx.getShaderParameter(vsh, ctx.COMPILE_STATUS)) {
                var e = new Error(ctx.getShaderInfoLog(vsh));
                ctx.deleteShader(vsh);
                throw e;
            }
            var fsh = ctx.createShader(ctx.FRAGMENT_SHADER);
            ctx.shaderSource(fsh, fshSource);
            ctx.compileShader(fsh);
            if (!ctx.getShaderParameter(fsh, ctx.COMPILE_STATUS)) {
                var e = new Error(ctx.getShaderInfoLog(fsh));
                ctx.deleteShader(vsh);
                ctx.deleteShader(fsh);
                throw e;
            }
            var p = ctx.createProgram();
            ctx.attachShader(p, vsh);
            ctx.attachShader(p, fsh);
            ctx.linkProgram(p);
            ctx.deleteShader(vsh);
            ctx.deleteShader(fsh);
            if (!ctx.getProgramParameter(p, ctx.LINK_STATUS)) {
                var e = new Error(ctx.getProgramInfoLog(p));
                ctx.deleteProgram(p);
                throw e;
            }
            return p;
        }
        ui.createGLProgram = createGLProgram;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        function parseColor(value) {
            var v = { r: 0, g: 0, b: 0, a: 0 };
            if (typeof value == 'string') {
                if (ui.HasPrefix(value, "#")) {
                    if (value.length == 9) {
                        v.a = parseInt(value.substr(1, 2), 16) / 255.0;
                        v.r = parseInt(value.substr(3, 2), 16) / 255.0;
                        v.g = parseInt(value.substr(5, 2), 16) / 255.0;
                        v.b = parseInt(value.substr(7, 2), 16) / 255.0;
                    }
                    else if (value.length == 7) {
                        v.r = parseInt(value.substr(1, 2), 16) / 255.0;
                        v.g = parseInt(value.substr(3, 2), 16) / 255.0;
                        v.b = parseInt(value.substr(5, 2), 16) / 255.0;
                        v.a = 1;
                    }
                    else if (value.length == 4) {
                        v.r = parseInt(value.substr(1, 1), 16);
                        v.g = parseInt(value.substr(2, 1), 16);
                        v.b = parseInt(value.substr(3, 1), 16);
                        v.a = 1;
                        v.r = (v.r << 4 | v.r) / 255.0;
                        v.g = (v.g << 4 | v.g) / 255.0;
                        v.b = (v.b << 4 | v.b) / 255.0;
                    }
                }
            }
            return v;
        }
        ui.parseColor = parseColor;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        ui.Auto = 2147483647;
        function Copy(target, source) {
            for (var key in source) {
                target[key] = source[key];
            }
        }
        ui.Copy = Copy;
        function HasSuffix(s, suffix) {
            if (s.length < suffix.length) {
                return false;
            }
            return s.substr(s.length - suffix.length) == suffix;
        }
        ui.HasSuffix = HasSuffix;
        function HasPrefix(s, prefix) {
            if (s.length < prefix.length) {
                return false;
            }
            return s.substr(0, prefix.length) == prefix;
        }
        ui.HasPrefix = HasPrefix;
        var PixelType;
        (function (PixelType) {
            PixelType[PixelType["Auto"] = 0] = "Auto";
            PixelType[PixelType["Percent"] = 1] = "Percent";
            PixelType[PixelType["PX"] = 2] = "PX";
            PixelType[PixelType["RPX"] = 3] = "RPX";
            PixelType[PixelType["VW"] = 4] = "VW";
            PixelType[PixelType["VH"] = 5] = "VH";
        })(PixelType = ui.PixelType || (ui.PixelType = {}));
        var VerticalAlign;
        (function (VerticalAlign) {
            VerticalAlign[VerticalAlign["Top"] = 0] = "Top";
            VerticalAlign[VerticalAlign["Middle"] = 1] = "Middle";
            VerticalAlign[VerticalAlign["Bottom"] = 2] = "Bottom";
        })(VerticalAlign = ui.VerticalAlign || (ui.VerticalAlign = {}));
        var TextAlign;
        (function (TextAlign) {
            TextAlign[TextAlign["Left"] = 0] = "Left";
            TextAlign[TextAlign["Center"] = 1] = "Center";
            TextAlign[TextAlign["Right"] = 2] = "Right";
        })(TextAlign = ui.TextAlign || (ui.TextAlign = {}));
        var Position;
        (function (Position) {
            Position[Position["None"] = 0] = "None";
            Position[Position["Top"] = 1] = "Top";
            Position[Position["Bottom"] = 2] = "Bottom";
            Position[Position["Left"] = 3] = "Left";
            Position[Position["Right"] = 4] = "Right";
        })(Position = ui.Position || (ui.Position = {}));
        var TextDecoration;
        (function (TextDecoration) {
            TextDecoration[TextDecoration["None"] = 0] = "None";
            TextDecoration[TextDecoration["Underline"] = 1] = "Underline";
            TextDecoration[TextDecoration["LineThrough"] = 2] = "LineThrough";
        })(TextDecoration = ui.TextDecoration || (ui.TextDecoration = {}));
        function parseVerticalAlign(value) {
            switch (typeof value) {
                case "string":
                    switch (value) {
                        case "middle":
                            return VerticalAlign.Middle;
                        case "bottom":
                            return VerticalAlign.Bottom;
                    }
                    break;
                case "number":
                    return value;
            }
            return VerticalAlign.Top;
        }
        ui.parseVerticalAlign = parseVerticalAlign;
        function parsePosition(value) {
            switch (typeof value) {
                case "string":
                    switch (value) {
                        case "top":
                            return Position.Top;
                        case "bottom":
                            return Position.Bottom;
                        case "left":
                            return Position.Left;
                        case "right":
                            return Position.Right;
                    }
                    break;
                case "number":
                    return value;
            }
            return Position.None;
        }
        ui.parsePosition = parsePosition;
        function parsePixel(value) {
            switch (typeof value) {
                case "string":
                    if (value == "auto") {
                        return { value: 0, type: PixelType.Auto };
                    }
                    if (HasSuffix(value, "%")) {
                        return { value: parseFloat(value), type: PixelType.Percent };
                    }
                    if (HasSuffix(value, "rpx")) {
                        return { value: parseFloat(value), type: PixelType.RPX };
                    }
                    if (HasSuffix(value, "px")) {
                        return { value: parseFloat(value), type: PixelType.PX };
                    }
                    if (HasSuffix(value, "vh")) {
                        return { value: parseFloat(value), type: PixelType.VH };
                    }
                    if (HasSuffix(value, "vw")) {
                        return { value: parseFloat(value), type: PixelType.VW };
                    }
                    break;
                case "number":
                    return { value: value, type: PixelType.RPX };
            }
            return { value: 0, type: PixelType.Auto };
        }
        ui.parsePixel = parsePixel;
        function parseEdge(value) {
            var v = { top: { value: 0, type: PixelType.Auto }, right: { value: 0, type: PixelType.Auto }, bottom: { value: 0, type: PixelType.Auto }, left: { value: 0, type: PixelType.Auto } };
            if (typeof value == 'string') {
                var vs = value.split(" ");
                if (vs.length > 0) {
                    v.top = parsePixel(vs[0]);
                    if (vs.length > 1) {
                        v.right = parsePixel(vs[1]);
                        if (vs.length > 2) {
                            v.bottom = parsePixel(vs[2]);
                            if (vs.length > 3) {
                                v.left = parsePixel(vs[3]);
                            }
                            else {
                                Copy(v.left, v.right);
                            }
                        }
                        else {
                            Copy(v.left, v.right);
                            Copy(v.bottom, v.top);
                        }
                    }
                    else {
                        Copy(v.left, v.top);
                        Copy(v.right, v.top);
                        Copy(v.bottom, v.top);
                    }
                }
            }
            return v;
        }
        ui.parseEdge = parseEdge;
        function pixel(p, unit, baseOf, defaultValue) {
            switch (p.type) {
                case PixelType.Percent:
                    return p.value * baseOf * 0.01;
                case PixelType.PX:
                    return p.value * unit.UnitPX;
                case PixelType.RPX:
                    return p.value * unit.UnitRPX;
                case PixelType.VH:
                    return p.value * unit.UnitVH;
                case PixelType.VW:
                    return p.value * unit.UnitVW;
            }
            return defaultValue;
        }
        ui.pixel = pixel;
        function booleanValue(value, defalutValue) {
            switch (typeof value) {
                case "object":
                    return true;
                case "function":
                    return true;
                case "string":
                    return value == "true";
                case "number":
                    return value != 0;
                case "boolean":
                    return value;
            }
            return defalutValue;
        }
        ui.booleanValue = booleanValue;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        function layoutLineElements(elements, inSize, lineHeight, unit) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element = elements_1[_i];
                switch (element.verticalAlign) {
                    case ui.VerticalAlign.Bottom:
                        {
                            var r = element.frame;
                            var mbottom = ui.pixel(element.margin.bottom, unit, inSize.height, 0);
                            var mtop = ui.pixel(element.margin.top, unit, inSize.height, 0);
                            r.origin.y = r.origin.y + (lineHeight - mtop - mbottom - r.size.height);
                        }
                        break;
                    case ui.VerticalAlign.Middle:
                        {
                            var r = element.frame;
                            var mbottom = ui.pixel(element.margin.bottom, unit, inSize.height, 0);
                            var mtop = ui.pixel(element.margin.top, unit, inSize.height, 0);
                            r.origin.y = r.origin.y + (lineHeight - mtop - mbottom - r.size.height) * 0.5;
                        }
                        break;
                }
                element.didLayouted();
            }
        }
        function LayoutFlex(element, unit, autoWarp) {
            if (autoWarp === void 0) { autoWarp = true; }
            var size = element.frame.size;
            var padding = element.padding;
            var paddingLeft = ui.pixel(padding.left, unit, size.width, 0);
            var paddingRight = ui.pixel(padding.right, unit, size.width, 0);
            var paddingTop = ui.pixel(padding.top, unit, size.height, 0);
            var paddingBottom = ui.pixel(padding.bottom, unit, size.height, 0);
            var inSize = { width: size.width - paddingLeft - paddingRight, height: size.height - paddingTop - paddingBottom };
            var y = paddingTop;
            var x = paddingLeft;
            var maxWidth = paddingLeft + paddingRight;
            var lineHeight = 0;
            var p = element.firstChild;
            var lineElements = [];
            while (p) {
                if (p instanceof ui.LayoutElement) {
                    if (p.hidden) {
                        p = p.nextSibling;
                        continue;
                    }
                    var e = p;
                    var margin = e.margin;
                    var mleft = ui.pixel(margin.left, unit, size.width, 0);
                    var mright = ui.pixel(margin.right, unit, size.width, 0);
                    var mtop = ui.pixel(margin.top, unit, size.height, 0);
                    var mbottom = ui.pixel(margin.bottom, unit, size.height, 0);
                    var width = ui.pixel(e.width, unit, inSize.width - mleft - mright, ui.Auto);
                    var height = ui.pixel(e.height, unit, inSize.height - mtop - mbottom, ui.Auto);
                    var v = e.frame;
                    v.size.width = width;
                    v.size.height = height;
                    e.layoutChildren(unit);
                    if (width == ui.Auto) {
                        width = v.size.width = e.contentSize.width;
                        var min = ui.pixel(e.minWidth, unit, inSize.width, 0);
                        var max = ui.pixel(e.maxWidth, unit, inSize.width, ui.Auto);
                        if (v.size.width < min) {
                            width = v.size.width = min;
                        }
                        if (v.size.width > max) {
                            width = v.size.width = max;
                        }
                    }
                    if (height == ui.Auto) {
                        height = v.size.height = e.contentSize.height;
                        var min = ui.pixel(e.minHeight, unit, inSize.height, 0);
                        var max = ui.pixel(e.maxHeight, unit, inSize.height, ui.Auto);
                        if (v.size.height < min) {
                            height = v.size.height = min;
                        }
                        if (v.size.height > max) {
                            height = v.size.height = max;
                        }
                    }
                    if (autoWarp && x + mleft + mright + paddingRight + v.size.width > size.width) {
                        if (lineElements.length > 0) {
                            layoutLineElements(lineElements, inSize, lineHeight, unit);
                            lineElements = [];
                        }
                        y += lineHeight;
                        lineHeight = 0;
                        x = paddingLeft;
                    }
                    var left = x + mleft;
                    var top_1 = y + mtop;
                    x += width + mleft + mright;
                    if (lineHeight < height + mtop + mbottom) {
                        lineHeight = height + mtop + mbottom;
                    }
                    v.origin.x = left;
                    v.origin.y = top_1;
                    if (left + paddingRight + mright > maxWidth) {
                        maxWidth = left + paddingRight + mright;
                    }
                    lineElements.push(e);
                }
                p = p.nextSibling;
            }
            if (lineElements.length > 0) {
                layoutLineElements(lineElements, inSize, lineHeight, unit);
            }
            return { width: maxWidth, height: y + lineHeight + paddingBottom };
        }
        ui.LayoutFlex = LayoutFlex;
        ;
        function LayoutHorizontal(element, unit) {
            return LayoutFlex(element, unit, false);
        }
        ui.LayoutHorizontal = LayoutHorizontal;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
var kk;
(function (kk) {
    var ui;
    (function (ui) {
        function LayoutRelative(element, unit) {
            var size = element.frame.size;
            var padding = element.padding;
            var paddingLeft = ui.pixel(padding.left, unit, size.width, 0);
            var paddingRight = ui.pixel(padding.right, unit, size.width, 0);
            var paddingTop = ui.pixel(padding.top, unit, size.height, 0);
            var paddingBottom = ui.pixel(padding.bottom, unit, size.height, 0);
            var inSize = { width: size.width - paddingLeft - paddingRight, height: size.height - paddingTop - paddingBottom };
            var contentSize = { width: 0, height: 0 };
            var p = element.firstChild;
            while (p) {
                if (p instanceof ui.LayoutElement) {
                    var e = p;
                    var margin = e.margin;
                    var mleft = ui.pixel(margin.left, unit, size.width, 0);
                    var mright = ui.pixel(margin.right, unit, size.width, 0);
                    var mtop = ui.pixel(margin.top, unit, size.height, 0);
                    var mbottom = ui.pixel(margin.bottom, unit, size.height, 0);
                    var width = ui.pixel(e.width, unit, inSize.width - mleft - mright, ui.Auto);
                    var height = ui.pixel(e.height, unit, inSize.height - mtop - mbottom, ui.Auto);
                    var v = e.frame;
                    v.size.width = width;
                    v.size.height = height;
                    e.layoutChildren(unit);
                    if (width == ui.Auto) {
                        width = v.size.width = e.contentSize.width;
                        var min = ui.pixel(e.minWidth, unit, inSize.width, 0);
                        var max = ui.pixel(e.maxWidth, unit, inSize.width, ui.Auto);
                        if (v.size.width < min) {
                            width = v.size.width = min;
                        }
                        if (v.size.width > max) {
                            width = v.size.width = max;
                        }
                    }
                    if (height == ui.Auto) {
                        height = v.size.height = e.contentSize.height;
                        var min = ui.pixel(e.minHeight, unit, inSize.height, 0);
                        var max = ui.pixel(e.maxHeight, unit, inSize.height, ui.Auto);
                        if (v.size.height < min) {
                            height = v.size.height = min;
                        }
                        if (v.size.height > max) {
                            height = v.size.height = max;
                        }
                    }
                    var left = ui.pixel(e.left, unit, inSize.width, ui.Auto);
                    var right = ui.pixel(e.right, unit, inSize.width, ui.Auto);
                    var top_2 = ui.pixel(e.top, unit, inSize.height, ui.Auto);
                    var bottom = ui.pixel(e.bottom, unit, inSize.height, ui.Auto);
                    if (left == ui.Auto) {
                        if (size.width == ui.Auto) {
                            left = paddingLeft + mleft;
                        }
                        else if (right == ui.Auto) {
                            left = paddingLeft + mleft + (inSize.width - width - mleft - mright) * 0.5;
                        }
                        else {
                            left = paddingLeft + (inSize.width - right - mright - width);
                        }
                    }
                    else {
                        left = paddingLeft + left + mleft;
                    }
                    if (top_2 == ui.Auto) {
                        if (size.height == ui.Auto) {
                            top_2 = paddingTop + mtop;
                        }
                        else if (bottom == ui.Auto) {
                            top_2 = paddingTop + mtop + (inSize.height - height - mtop - mbottom) * 0.5;
                        }
                        else {
                            top_2 = paddingTop + (inSize.height - height - mbottom - bottom);
                        }
                    }
                    else {
                        top_2 = paddingTop + top_2 + mtop;
                    }
                    v.origin.x = left;
                    v.origin.y = top_2;
                    if (left + paddingRight + mright + v.size.width > contentSize.width) {
                        contentSize.width = left + paddingRight + mright + v.size.width;
                    }
                    if (top_2 + paddingBottom + mbottom + v.size.height > contentSize.height) {
                        contentSize.height = top_2 + paddingBottom + mbottom + v.size.height;
                    }
                    e.didLayouted();
                }
                p = p.nextSibling;
            }
            return contentSize;
        }
        ui.LayoutRelative = LayoutRelative;
        ;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
