//渲染
//画布
namespace wx {
    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。
     */
    export function createCanvas(): Canvas {
        return
    }


    export class Canvas {

        /**
         * 画布的宽度
         */
        _width: number;

        /**
         * 画布的高度
         */
        _height: number;

        public get width() {
            return this._width
        }
        public set width(v) {
            this._width = v;
        }
        public get height() {
            return this._height
        }
        public set height(v) {
            this._height = v;
        }

        /**
         * @return string canvas 生成的临时文件路径
         */
        public toTempFilePath(options: toTempFilePathParam): string {
            return;
        }
        /**
         * Canvas.toTempFilePath 的同步版本
         */
        public toTempFilePathSync(options: toTempFilePathParam) {

        }
        /**
         * 获取画布对象的绘图上下文
         * @param contextType{string} 上下文类型  取值范围(2d	2d 绘图上下文    webgl	webgl 绘图上下文)
         * @param contextAttributes   webgl 上下文属性，仅当 contextType 为 webgl 时有效
         */
        public getContext(contextType: string, contextAttributes: contextAttributesPatam = {
            antialias: false, preserveDrawingBuffer: false, antialiasSamples: 2
        }): RenderingContext { return; }



    }

    /**
     * x	number	0	否	截取 canvas 的左上角横坐标	
     * y	number	0	否	截取 canvas 的左上角纵坐标	
     * width	number	canvas 的宽度	否	截取 canvas 的宽度	
     * height	number	canvas 的高度	否	截取 canvas 的高度	
     *destWidth	number	canvas 的宽度	否	目标文件的宽度，会将截取的部分拉伸或压缩至该数值	
     *destHeight	number	canvas 的高度	否	目标文件的高度，会将截取的部分拉伸或压缩至该数值	
     *fileType	string	png	否	目标文件的类型	
        (fileType 的合法值
        值	说明
        jpg	jpg 文件
        png	png 文件
        )
     *quality	number	1.0	否	jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0	
     *success	function		否	接口调用成功的回调函数	
     *fail	function		否	接口调用失败的回调函数	
     *complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    export interface toTempFilePathParam extends callback_success_fail_complete {
        x?: number
        y?: number
        width?: number
        height?: number
        destWidth?: number
        destHeight?: number
        fileType?: string
        quality?: number
    }
    /**
     * 画布对象的绘图上下文。
     * 通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象，实现了 HTML Canvas 2D Context 定义的大部分属性、方法。
     * 通过 Canvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 WebGL 1.0 定义的所有属性、方法、常量。
     */

    export class RenderingContext {

    }
    /**
     * antialias	boolean	false	否	表示是否抗锯齿	
     * preserveDrawingBuffer	boolean	false	否	表示是否绘图完成后是否保留绘图缓冲区	
     * antialiasSamples	number	2	否	抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持
     */
    export interface contextAttributesPatam {
        antialias?: boolean
        preserveDrawingBuffer?: boolean
        antialiasSamples?: number
    }
}