//系统

namespace wx {
    /**
     * 获取系统信息
     */
    export function getSystemInfo(callbacks: getSystemInfoObj) { }
    /**
     * wx.getSystemInfo 的同步版本
     */
    export function getSystemInfoSync(): getSystemInfoSuccessObj { return; }
   
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
    interface getSystemInfoSuccessObj {
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
    interface getSystemInfoObj {
        success?: (res: getSystemInfoSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
}