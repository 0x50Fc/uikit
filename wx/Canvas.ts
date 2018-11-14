//画布

namespace wx {
    /**获取 canvas 区域隐含的像素数据。 */
    export function canvasGetImageData(obj: canvasGetImageDataObj, thisObj: any) { }
    /**将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件 */
    export function canvasPutImageData(obj: canvasPutImageDataObj, thisObj: any) { }
    /**把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。 */
    export function canvasToTempFilePath(obj: canvasToTempFilePathObj, thisObj: any) { }
    /**创建 canvas 的绘图上下文 CanvasContext 对象 */
    export function createCanvasContext(canvasId: string, thisObj: any): CanvasContext { return }


    interface canvasGetImageDataObj {
        canvasId: string		//	画布标识，传入 <canvas> 组件的 canvas-id 属性。	
        x: number		//	将要被提取的图像数据矩形区域的左上角横坐标	
        y: number		//	将要被提取的图像数据矩形区域的左上角纵坐标	
        width: number		//	将要被提取的图像数据矩形区域的宽度	
        height: number		//	将要被提取的图像数据矩形区域的高度
        success?: (res: width_heightObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface width_heightObj {
        width: number	//图像数据矩形的宽度	
        height: number	//图像数据矩形的高度
    }

    interface canvasPutImageDataObj extends wx.callback_success_fail_complete {
        canvasId: string		//	画布标识，传入 <canvas> 组件的 canvas-id 属性。	
        data: Uint8ClampedArray		//	图像像素点数据，一维数组，每四项表示一个像素点的 rgba	
        x: number		//	源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）	
        y: number		//	源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）	
        width: number		//	源图像数据矩形区域的宽度	
        height: number		//	源图像数据矩形区域的高度
    }

    interface canvasToTempFilePathObj extends wx.callback_success_fail_complete {
        x?: number
        y?: number
        width?: number
        height?: number
        destWidth?: number
        destHeight?: number
        fileType?: string
        quality: number
        canvasId: string		//	画布标识，传入 <canvas> 组件的 canvas-id
    }

    class CanvasGradient {
        public addColorStop(stop: number, color: Color) { }
    }
    interface Color {
    }

    class CanvasContext {
        fillStyle: string //支持版本 >= 1.9.90 填充颜色。用法同 CanvasContext.setFillStyle()。

        strokeStyle: string//支持版本 >= 1.9.90 边框颜色。用法同 CanvasContext.setFillStyle()。

        shadowOffsetX: number//支持版本 >= 1.9.90 阴影相对于形状在水平方向的偏移

        shadowOffsetY: number//支持版本 >= 1.9.90 阴影相对于形状在竖直方向的偏移

        shadowColor: number//支持版本 >= 1.9.90 阴影的颜色

        shadowBlur: number//支持版本 >= 1.9.90阴影的模糊级别

        lineWidth: number//支持版本 >= 1.9.90线条的宽度。用法同 CanvasContext.setLineWidth()。

        lineCap: number//支持版本 >= 1.9.90 线条的端点样式。用法同 CanvasContext.setLineCap()。

        lineJoin: number//支持版本 >= 1.9.90 线条的交点样式。用法同 CanvasContext.setLineJoin()。

        miterLimit: number//支持版本 >= 1.9.90 最大斜接长度。用法同 CanvasContext.setMiterLimit()。

        lineDashOffset: number//支持版本 >= 1.9.90虚线偏移量，初始值为0

        font: string//支持版本 >= 1.9.90当前字体样式的属性。符合 CSS font 语法 的 DOMString 字符串，至少需要提供字体大小和字体族名。默认值为 10px sans-serif。

        globalAlpha: number//全局画笔透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。

        globalCompositeOperation: string//支持版本 >= 1.9.90在绘制新形状时应用的合成操作的类型。目前安卓版本只适用于 fill 填充块的合成，用于 stroke 线段的合成效果都是 source-over。

        /**
         * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
         */
        public draw(reserve: boolean, callback) { }
        /**创建一个线性的渐变颜色。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
         */
        public createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient { return }
        /**
         * 创建一个圆形的渐变颜色。起点在圆心，终点在圆环。返回的CanvasGradient对象需要使用 
         * CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
         */
        public createCircularGradient(x: number, y: number, r: number): CanvasGradient { return }
        /**
         * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
         */
        public createPattern(image: string, repetition: string) { }

        /**
         * 测量文本尺寸信息。目前仅返回文本宽度。同步接口。
         */
        public measureText(text: string): Object { return }

        /**保存绘图上下文 */
        public save() { }
        /**恢复之前保存的绘图上下文。 */
        public restore() { }
        /**开始创建一个路径。需要调用 fill 或者 stroke 才会使用路径进行填充或描边 */
        public beginPath() { }
        /**把路径移动到画布中的指定点，不创建线条。用 stroke 方法来画线条 */
        public moveTo(x: number, y: number) { }
        /**增加一个新点，然后创建一条从上次指定点到目标点的线。用 stroke 方法来画线条 */
        public lineTo(x: number, y: number) { }
        /**创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。 */
        public quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) { }
        /**创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。 */
        public bezierCurveTo() { }
        /**创建一条弧线。 */
        public arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise: number) { }
        /**创建一个矩形路径。需要用 fill 或者 stroke 方法将矩形真正的画到 canvas 中 */
        public rect(x: number, y: number, width: number, height: number) { }
        /**根据控制点和半径绘制圆弧路径。 */
        public arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) { }
        /**
         * 从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）
         * 可以在使用 clip 方法前通过使用 save 方法对当前画布区域进行保存，并在以后的任意时间通过restore方法对其进行恢复
         */
        public clip() { }
        /**填充一个矩形。用 setFillStyle 设置矩形的填充色，如果没设置默认是黑色。 */
        public fillRect(x: number, y: number, width: number, height: number) { }
        /**画一个矩形(非填充)。 用 setStrokeStyle 设置矩形线条的颜色，如果没设置默认是黑色。 */
        public strokeRect(x: number, y: number, width: number, height: number) { }
        /**清除画布上在该矩形区域内的内容 */
        public clearRect(x: number, y: number, width: number, height: number) { }
        /**对当前路径中的内容进行填充。默认的填充色为黑色。 */
        public fill() { }
        /**画出当前路径的边框。默认颜色色为黑色 */
        public stroke() { }
        /**关闭一个路径。会连接起点和终点。如果关闭路径后没有调用 fill 或者 stroke 并开启了新的路径，那之前的路径将不会被渲染。 */
        public closePath() { }
        /**在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。 */
        public scale(scaleWidth: number, scaleHeight: number) { }
        /**以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加。原点可以用 translate 方法修改。 */
        public rotate(rotate: number) { }
        /**对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。 */
        public translate(x: number, y: number) { }
        /**绘制图像到画布 */
        public drawImage(imageResource: string, dx: number, dy: number, dWidth: number,
            dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) { }
        /**给定的 (x, y) 位置绘制文本描边的方法 */
        public strokeText(text: string, x: number, y: number, maxWidth: number) { }
        /**使用矩阵多次叠加当前变换的方法 */
        public transform(scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number) { }
        /**使用矩阵重新设置（覆盖）当前变换的方法 */
        public setTransform(scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number) { }
        /**设置填充色。 */
        public setFillStyle(color: Color) { }
        /**设置描边颜色。 */
        public setStrokeStyle(color: Color) { }
        /**设定阴影样式。 */
        public setShadow(offsetX: number, offsetY: number, blur: number, color: string) { }
        /**设置全局画笔透明度。 */
        public setGlobalAlpha(alpha: number) { }
        /**设置线条的宽度 */
        public setLineWidth(lineWidth: number) { }
        /**设置线条的交点样式 */
        public setLineJoin(lineJoin: string) { }
        /**设置线条的端点样式 */
        public setLineCap(lineCap: string) { }
        /**设置虚线样式。 */
        public setLineDash(pattern: Array<number>, offset: number) { }
        /**设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。
         * 当 CanvasContext.setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
         */
        public setMiterLimit(miterLimit: number) { }
        /**在画布上绘制被填充的文本 */
        public fillText(text: string, x: number, y: number, maxWidth: number) { }
        /**设置字体的字号 */
        public setFontSize(fontSize: number) { }
        /**设置文字的对齐 */
        public setTextAlign(align: string) { }
        /**设置文字的竖直对齐 */
        public setTextBaseline(textBaseline: string) { }

    }
}