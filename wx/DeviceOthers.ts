//设备
//性能
//震动
//电话
//扫码
namespace wx {
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    export function vibrateShort(callbacks?: wx.callback_success_fail_complete) { }

    /**
     * 使手机发生较长时间的振动（400 ms)
     */
    export function vibrateLong(callbacks?: wx.callback_success_fail_complete) { }

    //性能
    /**
     * 监听内存不足告警事件
     */
    export function onMemoryWarning(callback?: (res: onMemoryWarningObj) => any) { }
    /**
     * 拨打电话
     */
    export function makePhoneCall(obj: makePhoneCallObj) { }
    /**调起客户端扫码界面进行扫码 */
    export function scanCode(obj:scanCodeObj) { }

    //屏幕
    /**
     * 获取屏幕亮度
     * success 返回值
     * value	number	屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
     */
    export function getScreenBrightness(obj: getScreenBrightnessObj) {
    }
    /**监听用户主动截屏事件。用户使用系统截屏按键截屏时触发 */
    export function onUserCaptureScreen(callback?:Function){}
    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
     */
    export function setKeepScreenOn(obj: setKeepScreenOnObj) { }
    /**
     * 设置屏幕亮度
     */
    export function setScreenBrightness(obj: setScreenBrightnessObj) { }

    //转屏
    /**
     * 监听横竖屏切换事件
     */

    // export function onDeviceOrientationChange(callback?: (res: onDeviceOrientationChangeObj) => any) { }
    // /**
    //  * 取消监听横竖屏切换事件
    //  */
    // export function offDeviceOrientationChange(callback: Function) { }

    /**
     * level	number	内存告警等级，只有 Android 才有，对应系统宏定义
     * (5	TRIM_MEMORY_RUNNING_MODERATE
        10	TRIM_MEMORY_RUNNING_LOW
        15	TRIM_MEMORY_RUNNING_CRITICAL)
     */
    interface onMemoryWarningObj {
        level?: number
    }
    /**
     * keepScreenOn	boolean		是	是否保持屏幕常亮
     */
    interface setKeepScreenOnObj extends wx.callback_success_fail_complete {
        keepScreenOn: boolean
    }
    /**
     * value	number		是	屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮
     */
    interface setScreenBrightnessObj extends wx.callback_success_fail_complete {
        value: number
    }
    // /**
    //  * value	string	表示切换后的屏幕是横屏还是竖屏
    //  */
    // interface onDeviceOrientationChangeObj {
    //     value: string
    // }

    interface makePhoneCallObj extends wx.callback_success_fail_complete {
        phoneNumber: string		//	需要拨打的电话号码
    }
    interface scanCodeObj {
        onlyFromCamera: boolean	//	是否只能从相机扫码，不允许从相册选择图片	>= 1.2.0
        scanType: Array<string>	//['barCode', 'qrCode']		扫码类型
        success?: (res: scanCodeSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface scanCodeSuccessObj {
        result: string	//所扫码的内容	
        scanType: string	//所扫码的类型	
        charSet: string	//所扫码的字符集	
        path: string	//当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path	
        rawData: string	//原始数据，base64编码
    }

    interface getScreenBrightnessObj{
        success?: (res: getScreenBrightnessSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any

    }

    interface getScreenBrightnessSuccessObj{
        value	:number //屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
    }

}