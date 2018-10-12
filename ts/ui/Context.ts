
namespace kk {

    export namespace ui {


        export class Context implements IContext, IPixelUnit {

            public UnitPX: number = 1.0;
            public UnitRPX: number = 1.0;
            public UnitVW: number = 1.0;
            public UnitVH: number = 1.0;

            private _canvas: ICanvas;
            private _GLContext: ICanvasWebGLContext;
            private _programLayer: GLProgramLayer;
            private _projection: Float32Array = new Float32Array(16);

            constructor(canvas: ICanvas) {
                this._canvas = canvas;
                this._GLContext = canvas.getContext("webgl") as ICanvasWebGLContext;
                this._programLayer = new GLProgramLayer(this._GLContext);
                this._GLContext.clearColor(0, 0, 0, 0);
            }

            public createCanvas(width: number, height: number): ICanvas {
                return this._canvas.createCanvas(width, height);
            }

            public getContext(name: string): ICanvasCGContext | ICanvasWebGLContext | undefined {
                return this._canvas.getContext(name);
            }

            public display(element: IElement): void {

                this._GLContext.clear(this._GLContext.COLOR_BUFFER_BIT);

                if (element instanceof LayerElement) {
                    let e = element as LayerElement;
                    e.display(this);
                }

            }

            public drawLayer(layer: ILayer): void {
                this._programLayer.drawLayer(this, layer);
            }

            public get width(): number {
                return this._canvas.width;
            }

            public get height(): number {
                return this._canvas.height;
            }

            public layout(element: IElement): void {

                let width = this.width;
                let height = this.height;
                this.UnitVH = width * 0.01;
                this.UnitVW = height * 0.01;

                this._projection = new Float32Array([
                    2 / width, 0, 0, 0,
                    0, - 2 / height, 0, 0,
                    0, 0, -0.0001, 0,
                    - 1, 1, 0, 1,
                ]);

                this._GLContext.viewport(0, 0, width, height);

                if (element instanceof LayoutElement) {
                    let e = element as LayoutElement;
                    e.layout(this, { width: width, height: height });
                }
            }

            public get opacity(): number {
                return 1;
            }

            public get projection(): Float32Array {
                return this._projection;
            }


        }

    }

}
