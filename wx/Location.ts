

//位置

namespace wx {

    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
     */
    export function getLocation(obj:getLocationObj) {
     }
  
    /**
     * 
    属性	类型	说明	支持版本
    latitude	number	纬度，范围为 -90~90，负数表示南纬	
    longitude	number	经度，范围为 -180~180，负数表示西经	
    speed	number	速度，单位 m/s	
    accuracy	number	位置的精确度	
    altitude	number	高度，单位 m	>= 1.2.0
    verticalAccuracy	number	垂直精度，单位 m（Android 无法获取，返回 0）	>= 1.2.0
    horizontalAccuracy	number	水平精度，单位 m
     */
    interface locationSuccessObj {
        latitude: number
        longitude: number
        speed: number
        accuracy: number
        altitude: number
        verticalAccuracy: number
        horizontalAccuracy: number
    }


    /**
     * type	string	wgs84	否	wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标	
     * altitude	string	false	否	传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度	>= 1.6.0
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行
     */
    interface getLocationObj {
        type: string
        altitude?: string
        success?: (res: locationSuccessObj) => any
        fail?: (res: failCallbackRes) => any,
        complete?: (res: completeCallbackRes) => any
    }


}