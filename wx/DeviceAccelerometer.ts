//设备
//加速器
namespace wx {


    /**
     * 开始监听加速度数据。
     */
    export function startAccelerometer(obj: startAccelerometerObj) { }
    /**
     * 停止监听加速度数据。
     */
    export function stopAccelerometer(callbacks?: wx.callback_success_fail_complete) { }
    /**
     * 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数。
     * 可使用 wx.stopAccelerometer() 停止监听。
     */
    export function onAccelerometerChange(callback:(res:onAccelerometerChangeObj)=>any) {
        //test
        //callback({x:1,y:5,z:8})
     }

    /**
     * interval	string	normal	否	监听加速度数据回调函数的执行频率	>= 2.1.0
     * 取值范围:
     * (game	适用于更新游戏的回调频率，在 20ms/次 左右
     * ui	适用于更新 UI 的回调频率，在 60ms/次 左右
     * normal	普通的回调频率，在 200ms/次 左右)
     */

    interface startAccelerometerObj extends wx.callback_success_fail_complete {
        interval?: string
    }

    /**
     * x	number	X 轴	
     * y	number	Y 轴	
     * z	number	Z 轴
     */
    interface onAccelerometerChangeObj {
        x?: number
        y?: number
        z?: number
    }
}