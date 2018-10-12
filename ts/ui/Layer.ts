
namespace kk {

    export namespace ui {

        interface LayerMap {
            [name: string]: ILayer[]
        }

        class ReuseLayer {

            private _layers: LayerMap = {};

            public popLayer(reuse: string): ILayer | undefined {
                var vs = this._layers[reuse];
                if (vs !== undefined) {
                    return vs.shift();
                }
            }

            public addLayer(reuse: string, layer: ILayer): void {
                var vs = this._layers[reuse];
                if (vs === undefined) {
                    this._layers[reuse] = [layer];
                } else {
                    vs.push(layer);
                }
            }

            public static get(element: IElement, autocreate: boolean = true): ReuseLayer {

                var v = element.object("ReuseLayer");

                if (autocreate && (v === undefined || !(v instanceof ReuseLayer))) {
                    v = new ReuseLayer();
                    element.setObject("ReuseLayer", v);
                }

                return v;
            }
        }

        export class LayerElement extends LayoutElement implements ILayerElement {

            public get layerClass(): string {
                return Layer.className;
            }

            public get reuse(): string | undefined {
                var v = this.get("reuse");
                if (v === undefined && this.levelId != 0) {
                    v = this.layerClass + "_" + this.levelId;
                }
                return v;
            }

            protected _layer: ILayer | undefined;

            public get layer(): ILayer | undefined {
                return this._layer;
            }

            public invalidate(): void {
                let event = new ElementEvent(this);
                this.emit("invalidate", event);
            }

            public changedKey(key: string): void {
                super.changedKey(key);
                if (this._layer !== undefined) {
                    this.layerChangedKey(key, this._layer);
                }
            }

            public layerChangedKey(key: string, layer: ILayer): void {

                switch (key) {
                    case "background-color":
                        layer.backgroundColor = parseColor(this.get(key));
                        break;
                    case "border-color":
                        layer.borderColor = parseColor(this.get(key));
                        break;
                    case "border-width":
                        layer.borderWidth = parsePixel(this.get(key));
                        break;
                    case "border-radius":
                        layer.borderRadius = parsePixel(this.get(key));
                        break;
                    case "opacity":
                        layer.opacity = parseFloat(this.get(key) as string);
                        break;
                }

            }

            public didLayouted(): void {
                super.didLayouted();
                if (this._layer !== undefined) {
                    this.layerDidLayouted(this._layer);
                }
            }

            public layerDidLayouted(layer: ILayer) {
                layer.frame = this.frame;
            }

            public isVisibleChildren(element: LayerElement): boolean {

                var left = element.frame.origin.x - this.contentOffset.x;
                var top = element.frame.origin.y - this.contentOffset.y;
                var right = left + element.frame.size.width;
                var bottom = left + element.frame.size.height;

                left = Math.max(left,0);
                top = Math.max(top,0);
                right = Math.min(right,this.frame.size.width);
                bottom = Math.min(bottom,this.frame.size.height);

                return right > left && bottom > top;
            }

            public createLayer(): ILayer {
                return new Layer();
            }

            public obtainLayer(): void {

                if (this._layer !== undefined) {
                    return;
                }

                var v: ILayer | undefined;

                let reuse = this.reuse;

                if (reuse !== undefined && this.parent !== undefined) {
                    let reuseLayer = ReuseLayer.get(this.parent, true);
                    v = reuseLayer.popLayer(reuse);
                }

                if (v === undefined) {
                    v = this.createLayer();
                }

                this._layer = v;

                this.layerDidLayouted(v);

                for (let key of this.keys()) {
                    this.layerChangedKey(key, v);
                }

            }

            public recycleLayer(): void {

                if (this._layer === undefined) {
                    return;
                }

                let reuse = this.reuse;

                if (reuse !== undefined && this.parent !== undefined) {
                    let reuseLayer = ReuseLayer.get(this.parent, true);
                    reuseLayer.addLayer(reuse, this._layer);
                }

                this._layer = undefined;
            }

            public display(context: IContext): void {

                if (this._layer === undefined) {
                    this.obtainLayer();
                }

                (this._layer as ILayer).display(context);

                var e = this.firstChild;

                while (e) {

                    if (e instanceof LayerElement) {
                        if (this.isVisibleChildren(e)) {
                            e.display(context);
                        } else {
                            e.recycleLayer();
                        }
                    }

                    e = e.nextSibling;
                }

            }

        }

        export class Layer implements ILayer {

            public static className = "Layer";

            private _backgroundColor: IColor = { r: 0, g: 0, b: 0, a: 0 };
            private _contents: ILayer | IImage | undefined;
            private _contentsRect: IRect = { origin: { x: 0, y: 0 }, size: { width: 1, height: 1 } };
            private _contentsCenter: IRect = { origin: { x: 0, y: 0 }, size: { width: 1, height: 1 } };
            private _opacity: number = 1.0;
            private _hidden: boolean = false;
            private _borderWidth: IPixel = { value: 0, type: PixelType.Auto };
            private _borderRadius: IPixel = { value: 0, type: PixelType.Auto };
            private _borderColor: IColor = { r: 0, g: 0, b: 0, a: 0 };
            private _shadowColor: IColor = { r: 0, g: 0, b: 0, a: 0 };
            private _shadowOffset: IPoint = { x: 0, y: 0 };
            private _shadowBlur: IPixel = { value: 0, type: PixelType.Auto };
            private _invalidate: boolean = true;
            private _allowDraw: boolean = false;
            private _frame: IRect = { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } };

            public get backgroundColor(): IColor {
                return this._backgroundColor;
            }

            public set backgroundColor(v: IColor) {
                this._backgroundColor = v;
            }

            public get contents(): ILayer | IImage | undefined {
                return this._contents;
            }

            public set contents(v: ILayer | IImage | undefined) {
                this._contents = v;
                if (v !== undefined) {
                    this._allowDraw = false;
                }
            }

            public get contentsRect(): IRect {
                return this._contentsRect;
            }

            public set contentsRect(value: IRect) {
                this._contentsRect = value;
            }

            public get contentsCenter(): IRect {
                return this._contentsCenter;
            }

            public set contentsCenter(value: IRect) {
                this._contentsCenter = value;
            }

            public get opacity(): number {
                return this._opacity;
            }

            public set opacity(value: number) {
                this._opacity = value;
            }

            public get hidden(): boolean {
                return this._hidden;
            }

            public set hidden(value: boolean) {
                this._hidden = value;
            }

            public get borderWidth(): IPixel {
                return this._borderWidth;
            }

            public set borderWidth(value: IPixel) {
                this._borderWidth = value;
            }

            public get borderRadius(): IPixel {
                return this._borderRadius;
            }

            public set borderRadius(value: IPixel) {
                this._borderRadius = value;
            }

            public get borderColor(): IColor {
                return this._borderColor;
            }

            public set borderColor(value: IColor) {
                this._borderColor = value;
            }

            public get shadowColor(): IColor {
                return this._shadowColor;
            }

            public set shadowColor(value: IColor) {
                this._shadowColor = value;
            }

            public get shadowOffset(): IPoint {
                return this._shadowOffset;
            }

            public set shadowOffset(value: IPoint) {
                this._shadowOffset = value;
            }

            public get shadowBlur(): IPixel {
                return this._shadowBlur;
            }

            public set shadowBlur(value: IPixel) {
                this._shadowBlur = value;
            }

            public get allowDraw(): boolean {
                return this._allowDraw;
            }

            public set allowDraw(value: boolean) {
                this._allowDraw = value;
            }

            public get frame(): IRect {
                return this._frame;
            }

            public set frame(value: IRect) {
                this._frame = value;
            }

            public get className(): string {
                return Layer.className;
            }

            public draw(context: IContext, canvas: ICanvas): void {

            }

            public display(context: IContext): void {

                if (this._invalidate
                    && this._allowDraw
                    && this._frame.size.width > 0 && this._frame.size.height > 0) {

                    let canvas = context.createCanvas(this._frame.size.width, this._frame.size.height);

                    this.draw(context, canvas);

                    this._contents = canvas.toImage();

                    this._invalidate = false;
                }

                context.drawLayer(this);

            }

            public invalidate(): void {
                this._invalidate = true;
            }

        }
    }

}