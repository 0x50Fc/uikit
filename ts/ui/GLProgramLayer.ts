
namespace kk {

    export namespace ui {

        function GLError(context: ICanvasWebGLContext):void {
            let v = context.getError();
            if(v) {
                throw new Error("[WebGL] [ERROR] 0x" + v.toString(10));
            }
        }

        export class GLProgramLayer {

            private context: ICanvasWebGLContext;
            private program: WebGLProgram;
            private position: GLint;
            private texCoord: GLint;
            private projection: WebGLUniformLocation;
            private view: WebGLUniformLocation;
            private backgroundColor: WebGLUniformLocation;
            private contents: WebGLUniformLocation;
            private opacity: WebGLUniformLocation;
            private buffer: WebGLBuffer;
            private texture: WebGLTexture;

            constructor(context: ICanvasWebGLContext) {
                this.context = context;
                this.texture = context.createTexture() as WebGLTexture; GLError(context);

                context.bindTexture(context.TEXTURE_2D,this.texture); GLError(context);
                context.texImage2D(context.TEXTURE_2D,0,context.RGBA,1,1,0,context.RGBA,context.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])); GLError(context);
                context.bindTexture(context.TEXTURE_2D,null); GLError(context);

                this.buffer = context.createBuffer() as WebGLBuffer; GLError(context);

                this.program = createGLProgram(context,
                    `
attribute vec4 position;
attribute vec2 texCoord;

uniform mat4 projection;
uniform	mat4 view;

#ifdef GL_ES
varying mediump vec2 vTexCoord;
#else
varying vec2 vTexCoord;
#endif

void main()
{
    gl_Position = projection * view * position;
	vTexCoord = texCoord;
}
                    `,
                    `
             
#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vTexCoord;
uniform vec4 backgroundColor;
uniform sampler2D contents;
uniform float opacity;

void main()
{
	gl_FragColor = (texture2D(contents, vTexCoord) + backgroundColor) * opacity;
}

                    `);

                GLError(context);

                this.position = context.getAttribLocation(this.program, "position") as GLint; GLError(context);
                this.texCoord = context.getAttribLocation(this.program, "texCoord") as GLint; GLError(context);
                this.projection = context.getUniformLocation(this.program, "projection") as WebGLUniformLocation; GLError(context);
                this.view = context.getUniformLocation(this.program, "view") as WebGLUniformLocation; GLError(context);
                this.backgroundColor = context.getUniformLocation(this.program, "backgroundColor") as WebGLUniformLocation; GLError(context);
                this.contents = context.getUniformLocation(this.program, "contents") as WebGLUniformLocation; GLError(context);
                this.opacity = context.getUniformLocation(this.program, "opacity") as WebGLUniformLocation; GLError(context);
            }

            public drawLayer(context: IContext, layer: ILayer): void {

                let ctx = this.context;

                let view = new Float32Array([
                    1,0,0,0,
                    0,1,0,0,
                    0,0,1,0,
                    0,0,0,1,
                ]);

                ctx.useProgram(this.program); GLError(ctx);

                ctx.activeTexture(ctx.TEXTURE0); GLError(ctx);
                ctx.bindTexture(ctx.TEXTURE_2D,this.texture); GLError(ctx);

                ctx.uniformMatrix4fv(this.projection,false,context.projection); GLError(ctx);
                ctx.uniformMatrix4fv(this.view,false,view); GLError(ctx);
                ctx.uniform1i(this.contents,0); GLError(ctx);
                ctx.uniform4f(this.backgroundColor, layer.backgroundColor.r, layer.backgroundColor.g, layer.backgroundColor.b, layer.backgroundColor.a); GLError(ctx);
                ctx.uniform1f(this.opacity, layer.opacity); GLError(ctx);

                let left = layer.frame.origin.x;
                let top = layer.frame.origin.y;
                let right = left + layer.frame.size.width;
                let bottom = top + layer.frame.size.height;

                let sleft = layer.contentsRect.origin.x;
                let stop = layer.contentsRect.origin.y;
                let sright = layer.contentsRect.origin.x + layer.contentsRect.size.width;
                let sbottom = layer.contentsRect.origin.y + layer.contentsRect.size.height;

                ctx.bindBuffer(ctx.ARRAY_BUFFER, this.buffer); GLError(ctx);
                ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([
                    left, bottom, 0, sleft, sbottom,
                    left, top, 0, sleft, stop,
                    right, bottom, 0, sright, sbottom,
                    right, top, 0, sleft, stop,
                ]),ctx.STATIC_DRAW); GLError(ctx);

                ctx.enableVertexAttribArray(this.position); GLError(ctx);
                ctx.vertexAttribPointer(this.position, 3, ctx.FLOAT, false, 5 * 4, 0); GLError(ctx);
                
                ctx.enableVertexAttribArray(this.texCoord); GLError(ctx);
                ctx.vertexAttribPointer(this.texCoord, 2, ctx.FLOAT, false, 5 * 4, 3 * 4); GLError(ctx);

                ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4); GLError(ctx);

            }

        }

    }
}