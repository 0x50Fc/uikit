
//陀螺仪
namespace wx{

    /**
     * 开始监听陀螺仪数据。
     */

    export function startGyroscope(param:startGyroscopeParam){}
    /**
     * 停止监听陀螺仪数据。
     */

    export function stopGyroscope(callbacks?: callback_success_fail_complete){}
    /**
     * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。
     * 可以使用 wx.stopGyroscope() 停止监听。
     */
    export function onGyroscopeChange(callback:(res:onGyroscopeChangeParam)=>any){}

    /**
     * interval	string	normal	否	监听陀螺仪数据回调函数的执行频率
     * 取值范围:
     * (game	适用于更新游戏的回调频率，在 20ms/次 左右
        ui	适用于更新 UI 的回调频率，在 60ms/次 左右
        normal	普通的回调频率，在 200ms/次 左右    )
     */
    interface  startGyroscopeParam{
        interval?:	string
    }

        /**
     * x	number	X 轴的角速度	
     * y	number	Y 轴的角速度
     * z	number	Z 轴的角速度
     */
    interface onGyroscopeChangeParam {
        x?: number
        y?: number
        z?: number
    }
}