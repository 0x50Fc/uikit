
namespace kk {

    export namespace ui {

        export interface ICanvasCGContext extends CanvasRenderingContext2D {

        }


        export interface ICanvasWebGLContext extends WebGLRenderingContext{

        }

        export class GLProgram extends Object {

            constructor(ctx:ICanvasWebGLContext,vshSource:string,fshSource:string) {
                super();

            }
        }

        export function createGLProgram(ctx:ICanvasWebGLContext,vshSource:string,fshSource:string):WebGLProgram {

            var vsh = ctx.createShader(ctx.VERTEX_SHADER) as WebGLShader;

            ctx.shaderSource(vsh,vshSource);
            ctx.compileShader(vsh);

            if(!ctx.getShaderParameter(vsh,ctx.COMPILE_STATUS)) {
                let e = new Error(ctx.getShaderInfoLog(vsh) as string);
                ctx.deleteShader(vsh);
                throw e;
            }

            var fsh = ctx.createShader(ctx.FRAGMENT_SHADER) as WebGLShader;

            ctx.shaderSource(fsh,fshSource);
            ctx.compileShader(fsh);

            if(!ctx.getShaderParameter(fsh,ctx.COMPILE_STATUS)) {
                let e = new Error(ctx.getShaderInfoLog(fsh) as string);
                ctx.deleteShader(vsh);
                ctx.deleteShader(fsh);
                throw e;
            }

            var p = ctx.createProgram() as WebGLProgram;

            ctx.attachShader(p,vsh);
            ctx.attachShader(p,fsh);

            ctx.linkProgram(p);

            ctx.deleteShader(vsh);
            ctx.deleteShader(fsh);

            if(!ctx.getProgramParameter(p,ctx.LINK_STATUS)) {
                let e = new Error(ctx.getProgramInfoLog(p) as string);
                ctx.deleteProgram(p);
                throw e;
            }

            return p;
        }

       
        export interface ICanvas {

            on:((name:string,data:any)=>void) | undefined;
    
            onresize : ((width:number,height:number)=>void) | undefined;

            createCanvas(width: number, height: number): ICanvas;

            getContext(name: string): ICanvasCGContext | ICanvasWebGLContext | undefined;

            width: number;

            height: number;

            toImage(): IImage;

        }

    }
}
