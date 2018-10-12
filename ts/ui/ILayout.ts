
namespace kk {

    export namespace ui {

        export interface ILayoutElement extends IStyleElement {

            frame: IRect;
            contentSize: ISize;
            contentOffset: IPoint;
            padding: IEdge;
            margin: IEdge;
            width: IPixel;
            height: IPixel;
            minWidth: IPixel;
            maxWidth: IPixel;
            minHeight: IPixel;
            maxHeight: IPixel;
            left: IPixel;
            top: IPixel;
            right: IPixel;
            bottom: IPixel;
            verticalAlign: VerticalAlign;
            position: Position;
            readonly hidden:boolean;
            layoutFunc: ((element: ILayoutElement, unit: IPixelUnit) => ISize) | undefined;

            layoutChildren(unit: IPixelUnit): void;
            layout(unit: IPixelUnit,size?: ISize): void;

        }

    }

}
