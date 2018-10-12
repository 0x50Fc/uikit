
namespace kk {

    export namespace ui {

        export interface IContext {
            createCanvas(width: number, height: number): ICanvas;
            getContext(name: string): ICanvasCGContext | ICanvasWebGLContext | undefined;
            layout(element: IElement): void;
            display(element: IElement): void;
            drawLayer(layer: ILayer): void;
            readonly width: number;
            readonly height: number;
            readonly opacity: number;
            readonly projection: Float32Array;
        }

    }
}