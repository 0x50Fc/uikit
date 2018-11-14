
//路由

namespace wx{
    /**关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。 */
    export function navigateBack(obj:navigateBackObj){}
    /**保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面 */
    export function navigateTo(obj:urlObj){}
    /**关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面 */
    export function redirectTo(obj:urlObj){}
    /**关闭所有页面，打开到应用内的某个页面 */
    export function reLaunch(obj:urlObj){}
    /**跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
    export function switchTab(obj:urlObj){}

    interface navigateBackObj extends wx.callback_success_fail_complete{
        delta	:number		//	返回的页面数，如果 delta 大于现有页面数，则返回到首页。
    }

    interface urlObj extends wx.callback_success_fail_complete{
        url	:string		//参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
    }


}