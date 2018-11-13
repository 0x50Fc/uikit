//界面
//动画

namespace wx {
    /**创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
 */
    export function createAnimation(obj: animationObj): Animation { return }

    interface animationObj {
        duration?: number	//400	否	动画持续时间，单位 ms	
        timingFunction?: string	//'linear'	否	动画的效果	
        delay?: number	//0	否	动画延迟时间，单位 ms	
        transformOrigin?: string	//'50% 50% 0'	否
    }

    class Animation {
        public export(): Array<any> { return }//导出动画队列。export 方法每次调用后会清掉之前的动画操作。

        public step(obj:stepObj) { }//表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

        public matrix(): Animation { return }//同 transform-function matrix

        public matrix3d(): Animation { return }//同 transform-function matrix3d

        public rotate(angle: number): Animation { return }//从原点顺时针旋转一个角度

        public rotate3d(x: number, y: number, z: number, angle: number): Animation { return }//从 X 轴顺时针旋转一个角度

        public rotateX(angle: number): Animation { return }//从 X 轴顺时针旋转一个角度

        public rotateY(angle: number): Animation { return }//从 Y 轴顺时针旋转一个角度

        public rotateZ(angle: number): Animation { return }//从 Z 轴顺时针旋转一个角度

        public scale(sx: number, sy: number): Animation { return }//缩放

        public scale3d(sx: number, sy: number, sz: number): Animation { return }//缩放

        public scaleX(scale: number): Animation { return }//缩放 X 轴

        public scaleY(scale: number): Animation { return }//缩放 Y 轴

        public scaleZ(scale: number): Animation { return }//缩放 Z 轴

        public skew(ax: number, ay: number): Animation { return }//对 X、Y 轴坐标进行倾斜

        public skewX(angle: number): Animation { return }//对 X 轴坐标进行倾斜

        public skewY(angle: number): Animation { return }//对 Y 轴坐标进行倾斜

        public translate(tx: number, ty: number): Animation { return }//平移变换

        public translate3d(tx: number, ty: number, tz: number): Animation { return }//对 xyz 坐标进行平移变换

        public translateX(translation: number): Animation { return }//对 X 轴平移

        public translateY(translation: number): Animation { return }//对 Y 轴平移

        public translateZ(translation: number): Animation { return }//对 Z 轴平移

        public opacity(value: number): Animation { return }//设置透明度

        public backgroundColor(value: string): Animation { return }//设置背景色

        public width(value: number | string): Animation { return }//设置宽度

        public height(value: number | string): Animation { return }//设置高度

        public left(value: number | string): Animation { return }//设置 left 值

        public right(value: number | string): Animation { return }//设置 right 值

        public top(value: number | string): Animation { return }//设置 top 值

        public bottom(value: number | string): Animation { return }//设置 bottom 值
    }

    interface stepObj{
        duration?:	number	//400	否	动画持续时间，单位 ms	
timingFunction	?:string	//'linear'	否	动画的效果	
delay	?:number	//0	否	动画延迟时间，单位 ms	
transformOrigin	?:string	//'50% 50% 0'	否
    }
}