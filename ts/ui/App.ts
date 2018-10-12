
namespace kk {

    export namespace ui {

        export function run(canvas: ICanvas, document: IDocument, scale: number = 1, fitSize: number = 0, frames = 60): any {

            let ctx = new Context(canvas);
            var invalidate = true;

            ctx.UnitPX = scale;
            ctx.UnitRPX = ctx.UnitPX;

            canvas.onresize = function (width: number, height: number): void {

                if(fitSize > 0) {
                    ctx.UnitRPX = Math.min(width,height) / fitSize;
                }

                let e = document.rootElement;
                if (e != null) {
                    ctx.layout(e);
                }
                invalidate = true;
            };

            document.on("invalidate", (event: IEvent): void => {
                invalidate = true;
            });

            return setInterval(function () {

                let e = document.rootElement;

                if (invalidate && e != null) {
                    invalidate = false;
                    ctx.display(e);
                }

            }, 1000 / frames);

        }

        export function openlibs(document: IDocument): void {

            document.addLibrary((document: IDocument, name: string, id: number): IElement => {
                return new LayerElement(document, name, id);
            }, "view");
        }
    }
}