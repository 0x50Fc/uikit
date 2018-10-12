
namespace kk {

    export namespace ui {

        interface LayoutMap {
            [name: string]: ((element: ILayoutElement, unit: IPixelUnit) => ISize)
        }

        var layouts: LayoutMap = {
            relative: LayoutRelative,
            flex: LayoutFlex,
            horizontal: LayoutHorizontal,
        };

        function getLayout(value: string | undefined): ((element: ILayoutElement, unit: IPixelUnit) => ISize) | undefined {
            if (typeof value == 'string') {
                return layouts[value];
            }
            return undefined;
        }

        export class LayoutElement extends StyleElement implements ILayoutElement {

            private _frame: IRect = { origin: { x: 0, y: 0 }, size: { width: 0, height: 0 } };

            constructor(document: IDocument, name: string, id: number) {
                super(document,name,id);
                this.layoutFunc = LayoutRelative;
            }
            
            public get frame(): IRect {
                return this._frame;
            }
            public set frame(value: IRect) {
                this._frame = value;
            }

            private _contentSize: ISize = { width: 0, height: 0 };

            public get contentSize(): ISize {
                return this._contentSize;
            }

            public set contentSize(value: ISize) {
                this._contentSize = value;
            }

            private _contentOffset: IPoint = { x: 0, y: 0 };

            public get contentOffset(): IPoint {
                return this._contentOffset;
            }

            public set contentOffset(value: IPoint) {
                this._contentOffset = value;
            }

            private _padding: IEdge = { top: { value: 0, type: PixelType.Auto }, right: { value: 0, type: PixelType.Auto }, bottom: { value: 0, type: PixelType.Auto }, left: { value: 0, type: PixelType.Auto } };

            public get padding(): IEdge {
                return this._padding;
            }

            public set padding(value: IEdge) {
                this._padding = value;
            }

            private _margin: IEdge = { top: { value: 0, type: PixelType.Auto }, right: { value: 0, type: PixelType.Auto }, bottom: { value: 0, type: PixelType.Auto }, left: { value: 0, type: PixelType.Auto } };

            public get margin(): IEdge {
                return this._margin;
            }

            public set margin(value: IEdge) {
                this._margin = value;
            }

            private _width: IPixel = { value: 0, type: PixelType.Auto };

            public get width(): IPixel {
                return this._width;
            }
            public set width(value: IPixel) {
                this._width = value;
            }

            private _height: IPixel = { value: 0, type: PixelType.Auto };

            public get height(): IPixel {
                return this._height;
            }

            public set height(value: IPixel) {
                this._height = value;
            }

            private _minWidth: IPixel = { value: 0, type: PixelType.Auto };

            public get minWidth(): IPixel {
                return this._minWidth;
            }

            public set minWidth(value: IPixel) {
                this._minWidth = value;
            }

            private _maxWidth: IPixel = { value: 0, type: PixelType.Auto };

            public get maxWidth(): IPixel {
                return this._maxWidth;
            }

            public set maxWidth(value: IPixel) {
                this._maxWidth = value;
            }

            private _minHeight: IPixel = { value: 0, type: PixelType.Auto };
            public get minHeight(): IPixel {
                return this._minHeight;
            }
            public set minHeight(value: IPixel) {
                this._minHeight = value;
            }

            private _maxHeight: IPixel = { value: 0, type: PixelType.Auto };
            public get maxHeight(): IPixel {
                return this._maxHeight;
            }
            public set maxHeight(value: IPixel) {
                this._maxHeight = value;
            }

            private _left: IPixel = { value: 0, type: PixelType.Auto };
            public get left(): IPixel {
                return this._left;
            }
            public set left(value: IPixel) {
                this._left = value;
            }

            private _top: IPixel = { value: 0, type: PixelType.Auto };
            public get top(): IPixel {
                return this._top;
            }
            public set top(value: IPixel) {
                this._top = value;
            }

            private _right: IPixel = { value: 0, type: PixelType.Auto };
            public get right(): IPixel {
                return this._right;
            }
            public set right(value: IPixel) {
                this._right = value;
            }

            private _bottom: IPixel = { value: 0, type: PixelType.Auto };
            public get bottom(): IPixel {
                return this._bottom;
            }
            public set bottom(value: IPixel) {
                this._bottom = value;
            }

            private _verticalAlign: VerticalAlign = VerticalAlign.Top;

            public get verticalAlign(): VerticalAlign {
                return this._verticalAlign;
            }

            public set verticalAlign(value: VerticalAlign) {
                this._verticalAlign = value;
            }

            private _position: Position = Position.None;

            public get position(): Position {
                return this._position;
            }

            public set position(value: Position) {
                this._position = value;
            }

            private _layoutFunc: ((element: ILayoutElement, unit: IPixelUnit) => ISize) | undefined;

            public get layoutFunc(): ((element: ILayoutElement, unit: IPixelUnit) => ISize) | undefined {
                return this._layoutFunc;
            }

            public set layoutFunc(value: ((element: ILayoutElement, unit: IPixelUnit) => ISize) | undefined) {
                this._layoutFunc = value;
            }

            public get hidden(): boolean {
                return booleanValue(this.get("hidden"), false);
            }

            public layoutChildren(unit: IPixelUnit): void {
                if (this._layoutFunc) {
                    this._contentSize = this._layoutFunc(this, unit);
                }
            }

            public layout(unit: IPixelUnit, size?: ISize): void {
                if (size !== undefined) {
                    this._frame.size = size;
                }
                this.layoutChildren(unit);
                this.didLayouted();
            }

            public didLayouted(): void {

            }

            public changedKey(key: string): void {
                switch (key) {
                    case "padding":
                        this._padding = parseEdge(this.get(key));
                        break;
                    case "margin":
                        this._margin = parseEdge(this.get(key));
                        break;
                    case "width":
                        this._width = parsePixel(this.get(key));
                        break;
                    case "height":
                        this._height = parsePixel(this.get(key));
                        break;
                    case "min-width":
                        this._minWidth = parsePixel(this.get(key));
                        break;
                    case "max-width":
                        this._maxWidth = parsePixel(this.get(key));
                        break;
                    case "min-height":
                        this._minHeight = parsePixel(this.get(key));
                        break;
                    case "max-height":
                        this._maxHeight = parsePixel(this.get(key));
                        break;
                    case "left":
                        this._left = parsePixel(this.get(key));
                        break;
                    case "top":
                        this._top = parsePixel(this.get(key));
                        break;
                    case "right":
                        this._right = parsePixel(this.get(key));
                        break;
                    case "bottom":
                        this._bottom = parsePixel(this.get(key));
                        break;
                    case "vertical-align":
                        this._verticalAlign = parseVerticalAlign(this.get(key));
                        break;
                    case "position":
                        this._position = parsePosition(this.get(key));
                        break;
                    case "layout":
                        this.layoutFunc = getLayout(this.get(key));
                        break;

                }
                super.changedKey(key);
            }

        }


    }

}
