

//震动

namespace wx {
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    export function vibrateShort(callbacks?: callback_success_fail_complete) { }

    /**
     * 使手机发生较长时间的振动（400 ms)
     */
    export function vibrateLong(callbacks?: callback_success_fail_complete) { }

    //性能
    /**
     * 监听内存不足告警事件
     */
    export function onMemoryWarning(callback?: (res: onMemoryWarningResp) => any) { }

    //屏幕
    /**
     * 获取屏幕亮度
     * success 返回值
     * value	number	屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
     */
    export function getScreenBrightness(callbacks: callback_success_fail_complete) {
    }
    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
     */
    export function setKeepScreenOn(param: setKeepScreenOnParam) { }

    /**
     * 设置屏幕亮度
     */

    export function setScreenBrightness(paramObj: setScreenBrightnessParam) { }

    //转屏
    /**
     * 监听横竖屏切换事件
     */

    export function onDeviceOrientationChange(callback?: (res: onDeviceOrientationChangeResp) => any) { }
    /**
     * 取消监听横竖屏切换事件
     */
    export function offDeviceOrientationChange(callback: Function) { }

    /**
     * level	number	内存告警等级，只有 Android 才有，对应系统宏定义
     * (5	TRIM_MEMORY_RUNNING_MODERATE
        10	TRIM_MEMORY_RUNNING_LOW
        15	TRIM_MEMORY_RUNNING_CRITICAL)
     */
    interface onMemoryWarningResp {
        level?: number
    }
    /**
     * keepScreenOn	boolean		是	是否保持屏幕常亮
     */
    interface setKeepScreenOnParam extends callback_success_fail_complete {
        keepScreenOn: boolean
    }
    /**
     * value	number		是	屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮
     */
    interface setScreenBrightnessParam extends callback_success_fail_complete {
        value: number
    }
    /**
     * value	string	表示切换后的屏幕是横屏还是竖屏
     */
    interface onDeviceOrientationChangeResp {
        value: string
    }


}