
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
    export function getBatteryInfo(callbacks: getBatteryInfoCB) { }

    /**
     * wx.getBatteryInfo 的同步版本
     */
    export function getBatteryInfoSync(): getBatteryInfoSuccessRes { return; }


    interface getBatteryInfoSuccessRes {
        level: string
        isCharging: boolean
    }
    interface getBatteryInfoCB {
        success?: (res: getBatteryInfoSuccessRes) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
}