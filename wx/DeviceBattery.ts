
//电量

namespace wx {
    /**
     * 
     * 获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
     * 
     * object.success 回调函数
            Object res
            属性	类型	说明	
            level	string	设备电量，范围 1 - 100	
            isCharging	boolean	是否正在充电中
     */
    export function getBatteryInfo(callbacks: getBatteryInfoObj) { }

    /**
     * wx.getBatteryInfo 的同步版本
     */
    export function getBatteryInfoSync(): getBatteryInfoSuccessObj { return; }


    interface getBatteryInfoSuccessObj {
        level: string
        isCharging: boolean
    }
    interface getBatteryInfoObj {
        success?: (res: getBatteryInfoSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
}