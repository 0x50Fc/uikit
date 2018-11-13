//界面
//tabBar

namespace wx {
    /**隐藏 tabBar */
    export function hideTabBar(obj: hideTabBarObj) { }
    /**隐藏 tabBar 某一项的右上角的红点 */
    export function hideTabBarRedDot(obj: TabBarIndexObj) { }
    /**移除 tabBar 某一项右上角的文本 */
    export function removeTabBarBadge(obj: TabBarIndexObj) { }
    /**为 tabBar 某一项的右上角添加文本 */
    export function setTabBarBadge(obj: TabBarIndexTextObj) { }
    /**动态设置 tabBar 某一项的内容 */
    export function setTabBarItem(obj: TabBarItemObj) { }
    /**动态设置 tabBar 的整体样式 */
    export function setTabBarStyle(obj: TabBarStyleObj) { }
    /**显示 tabBar */
    export function showTabBar(obj: showTabBarObj) { }
    /**显示 tabBar 某一项的右上角的红点 */
    export function showTabBarRedDot(obj: TabBarIndexObj) { }

    interface hideTabBarObj extends wx.callback_success_fail_complete {
        animation?: boolean	//false	否	是否需要动画效果
    }

    interface TabBarIndexObj extends wx.callback_success_fail_complete {
        index: number		//	tabBar 的哪一项，从左边算起
    }

    interface TabBarIndexTextObj extends wx.callback_success_fail_complete {
        index: number		//	tabBar 的哪一项，从左边算起	
        text: string		//	显示的文本，超过 4 个字符则显示成 ...
    }

    interface TabBarItemObj extends TabBarIndexTextObj {
        iconPath?: string		//	图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片	
        selectedIconPath?: string		//	选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
    }

    interface TabBarStyleObj extends wx.callback_success_fail_complete {
        color: string		//	tab 上的文字默认颜色，HexColor	
        selectedColor: string		//	tab 上的文字选中时的颜色，HexColor	
        backgroundColor: string		//	tab 的背景色，HexColor	
        borderStyle: string		//	tabBar上边框的颜色， 仅支持 black/white
    }
    interface showTabBarObj extends wx.callback_success_fail_complete {
        animation?: boolean	//false	否	是否需要动画效果
    }
}