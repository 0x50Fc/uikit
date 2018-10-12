
namespace kk {

    export namespace ui {

        export interface ILayerElement extends ILayoutElement {
            readonly layerClass:string;
            readonly reuse:string|undefined;
            readonly layer: ILayer | undefined;
            invalidate(): void;
        }

        export interface ILayer {

            frame: IRect;
            backgroundColor: IColor;
            contents: IImage | ILayer | undefined;
            contentsRect: IRect;
            contentsCenter: IRect;
            opacity: number;
            hidden: boolean;
            borderWidth: IPixel;
            borderRadius: IPixel;
            borderColor: IColor;
            shadowColor: IColor;
            shadowOffset: IPoint;
            shadowBlur: IPixel;
            allowDraw: boolean;
            className: string;

            draw(context: IContext, canvas: ICanvas): void;

            display(context: IContext): void;

            invalidate(): void;
        }
    }

}