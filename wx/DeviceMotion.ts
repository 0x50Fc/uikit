
//设备
//设备方向
namespace wx{

    /**
     * 开始监听设备方向的变化。
     */
    export function startDeviceMotionListening(obj?:startDeviceMotionListeningObj){
    }
    /**
     * 停止监听设备方向的变化。
     */
    export function stopDeviceMotionListening(callbacks?:wx.callback_success_fail_complete){
    }
    /**
     * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。
     * 可以使用 wx.stopDeviceMotionListening() 停止监听。
     */
    export function onDeviceMotionChange(callback:(res:onDeviceMotionChangeObj)=>any){}

    /**
     * interval	string	normal	否	监听设备方向的变化回调函数的执行频率
     * 取值范围:
     * (game	适用于更新游戏的回调频率，在 20ms/次 左右
     * ui	适用于更新 UI 的回调频率，在 60ms/次 左右
     * normal	普通的回调频率，在 200ms/次 左右)
     */
    interface startDeviceMotionListeningObj extends wx.callback_success_fail_complete{
        interval?: string
    }

    /**
     * alpha	number	当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。	
     * beta	number	当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。	
     * gamma	number	当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。
     */
    interface onDeviceMotionChangeObj{
        alpha	:number
        beta	:number
        gamma	:number
    }
}