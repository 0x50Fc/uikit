
namespace kk {

    interface StyleMap {
        [key: string]: IStyle
    }

    export class StyleElement extends Element implements IStyleElement {
    
        private _styles: StyleMap = {};

        public style(name: string): IStyle {
            var v = this._styles[name];
            if (v === undefined) {
                v = {};
                this._styles[name] = v;
            }
            return v;
        }

        public get status(): string {
            var v = this.get("status");
            if (v === undefined) {
                v = this.get("in-status");
            }
            if (v === undefined) {
                return "";
            }
            return v;
        }

        public addStatus(status: string): void {
            var v = this.get("status");
            if (v === undefined) {
                this.set("status", status);
            } else {
                var vs = v.split(" ");
                var i = vs.indexOf(status);
                if (i < 0) {
                    vs.push(status);
                    this.set("status", vs.join(" "));
                }
            }
        }

        public setStatus(status: string): void {
            this.set("status", status);
        }

        public removeStatus(status: string): void {

            var v = this.get("status");

            if (v === undefined) {
                this.set("status", status);
            } else {
                var vs = v.split(" ");
                var items: string[] = [];

                for (let v of vs) {
                    if (v != status) {
                        items.push(v);
                    }
                }

                this.set("status", items.join(" "));

            }
        }

        public hasStatus(status: string): boolean {
            var v = this.get("status");

            if (v === undefined) {
                return false;
            } else {
                var vs = v.split(" ");
                return vs.indexOf(status) >= 0;
            }
        }

        public changedStatus(): void {

            var keyMap: IStyle = {};
            var keys: string[] = [];

            var v = this.status;
            var vs: string[] = [""];

            if (v !== "") {
                vs = vs.concat(v.split(" "));
            }

            for (let s of vs) {

                let style = this._styles[s];

                if (style !== undefined) {
                    for (let key in style) {
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

        }

        public set(key: string | number, value?: string): void {
            if (typeof key == 'number') {
                if (this.document) {
                    key = this.document.key(key);
                } else {
                    return;
                }
            }
            super.set(key,value);
            this.changedKey(key);
        }

        public changedKey(key: string): void {

        }

        public changedKeys(keys: string[]): void {
            for (var key of keys) {
                this.changedKey(key);
            }
        }

        public get(key: string | number): string | undefined {

            if (typeof key == 'number') {
                if (this.document) {
                    key = this.document.key(key);
                } else {
                    return undefined;
                }
            }

            var v = super.get(key);

            if (v !== undefined) {
                return v;
            }

            var s = super.get("status");

            if(s === undefined) {
                s = super.get("in-status");
            }

            var vs:string[];

            if (s != undefined) {
                vs = s.split(" ");
                if(vs[0] != "") {
                    vs.push("");
                }
            } else {
                vs = [""];
            }

            for (s of vs) {

                var style = this._styles[s];

                if (style !== undefined) {
                    v = style[key];
                    if (v !== undefined) {
                        return v;
                    }
                }
            }
        }

        protected onDidAddChildren(element: IElement): void {
            super.onDidAddChildren(element);

            var s = this.get("status");

            if (s !== undefined) {
                var v = element.get("status");
                if (v === undefined) {
                    element.set("in-status", s);
                }
            }
        }

        public keys(): string[] {
            let keyMap:IStyle = {};
            var keys:string[] = [];

            for(let key in this.attributes) {
                keys.push(key);
                keyMap[key] = key;
            }

            for(let s in this._styles) {
                let style = this._styles[s];
                for(let key in style) {
                    if(keyMap[key] === undefined) {
                        keys.push(key);
                        keyMap[key] = key;
                    }
                }
            }

            return keys;
        }


    }

}