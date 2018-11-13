
//界面
//背景

namespace wx {
    /**动态设置窗口的背景色 */
    export function setBackgroundColor(obj: bgColorObj) { }
    /**动态设置下拉背景字体、loading 图的样式 */\
    export function setBackgroundTextStyle(obj: bgTextStyleObj) { }

    interface bgColorObj extends wx.callback_success_fail_complete {
        backgroundColor: string		//	窗口的背景色，必须为十六进制颜色值	
        backgroundColorTop: string		//	顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持	
        backgroundColorBottom: string		//	底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
    }

    interface bgTextStyleObj extends wx.callback_success_fail_complete {
        textStyle: string
    }
}