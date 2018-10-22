
//画布
namespace wx {
    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。
     */
    export function createCanvas(): Canvas {
        return
    }
}

class Canvas {

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
    public toTempFilePathSync(options:toTempFilePathParam){

    }



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
interface toTempFilePathParam extends callback_success_fail_complete {
    x?: number
    y?: number
    width?: number
    height?: number
    destWidth?: number
    destHeight?: number
    fileType?: string
    quality?: number
}