//系统

namespace wx {
    /**
     * 获取系统信息
     */
    export function getSystemInfo(callbacks: getSystemInfoCB) { }
    /**
     * wx.getSystemInfo 的同步版本
     */
    export function getSystemInfoSync(): getSystemInfoResp { return; }
    /**
     * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、
     * 微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    export function onAudioInterruptionBegin(callback: Function) { }
    /**
     * 取消监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、
     * 微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    export function offAudioInterruptionBegin(callback: Function) { }
    /**
     * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，
     * 收到此事件之后才可再次播放成功
     */
    export function onAudioInterruptionEnd(callback: Function) { }
    /**
     * 取消监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，
     * 收到此事件之后才可再次播放成功
     */
    export function offAudioInterruptionEnd(callback: Function) { }
    /**
     * 监听全局错误事件
     */
    export function onError(callback: (res: onErrorResp) => any) { }

    /**
     * 取消监听全局错误事件
     */
    export function offError(callback: Function) { }

    //生命周期
    /**
     * 退出当前小游戏
     */
    export function exitMiniProgram(callbacks?: callback_success_fail_complete) { }

    export function getLaunchOptionsSync(): LaunchOptions { return }
    /**
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
     */

    export function onHide(callback: Function) { }
    /**
     * 取消监听
     */
    export function offHide(callback: Function) { }
    /**
     * 监听小游戏回到前台的事件
     */
    export function onShow(callback: Function) { }
    /**
     * 取消监听
     */
    export function offShow(callback: Function) { }
    //触摸事件
    /**
     * 监听开始触摸事件
     */
    export function onTouchStart(callback: (res: TouchResp) => any) { }
    /**
     * 取消监听
     */
    export function offTouchStart(callback?: Function) { }
    /**
     * 监听触点移动事件
     */
    export function onTouchMove(res: TouchResp) { }
    /**
     * 取消监听
     */
    export function offTouchMove(callback?: Function) { }
    /**
     * 监听触摸结束事件
     */
    export function onTouchEnd(res: TouchResp) { }
    /**
     * 取消监听
     */
    export function offTouchEnd(callback?: Function) { }

    /**
     * 监听触点失效事件
     */
    export function onTouchCancel(res: TouchResp) { }
    /**
     * 取消监听
     */
    export function offTouchCancel(callback?: Function) { }
    /**
     * brand	string	手机品牌	>= 1.5.0
     * model	string	手机型号	
     * pixelRatio	number	设备像素比	
     * screenWidth	number	屏幕宽度	>= 1.1.0
     * screenHeight	number	屏幕高度	>= 1.1.0
     * windowWidth	number	可使用窗口宽度	
     * windowHeight	number	可使用窗口高度	
     * statusBarHeight	number	状态栏的高度	>= 1.9.0
     * language	string	微信设置的语言	
     * version	string	微信版本号	
     * system	string	操作系统版本	
     * platform	string	客户端平台	
     * fontSizeSetting	number	用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。	>= 1.5.0
     * SDKVersion	string	客户端基础库版本	>= 1.1.0
     * benchmarkLevel	number	(仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
     */
    interface getSystemInfoResp {
        brand?: string
        model?: string
        pixelRatio?: number
        screenWidth?: number
        screenHeight?: number
        windowWidth?: number
        windowHeight?: number
        statusBarHeight?: number
        language?: string
        version?: string
        system?: string
        platform?: string
        fontSizeSetting?: number
        SDKVersion?: string
        benchmarkLevel?: number
    }
    interface getSystemInfoCB {
        success?: (res: getSystemInfoResp) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }

    /**
     * message	string	错误	
     * stack	string	错误调用堆栈
     */
    interface onErrorResp {
        message: string
        stack: string
    }
    /**
     * scene	number	场景值	
     * query	Object	启动参数	
     * isSticky	boolean	当前小游戏是否被显示在聊天顶部	
     * shareTicket	string	shareTicket	
     * referrerInfo	object	当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */

    interface LaunchOptions {
        scene: number
        query: Object
        isSticky: boolean
        shareTicket: string
        referrerInfo: ReferInfo
    }
    /**
     * appId	string	来源小程序或公众号或App的 appId	
     * extraData	object	来源小程序传过来的数据，scene=1037或1038时支持
     */
    interface ReferInfo {
        appId: string
        extraData: any
    }

    /**
     * touches	Array.<Touch>	当前所有触摸点的列表	
     * changedTouches	Array.<Touch>	触发此次事件的触摸点列表	
     * timeStamp	number	事件触发时的时间戳
     */

    interface TouchResp {
        touches: Array<Touch>
        changedTouches: Array<Touch>
        timeStamp: number
    }
}