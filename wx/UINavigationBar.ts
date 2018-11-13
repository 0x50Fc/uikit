//界面
//导航栏

namespace wx {
    /**在当前页面隐藏导航条加载动画 */
    export function hideNavigationBarLoading(obj?: wx.callback_success_fail_complete) { }
    /**设置页面导航条颜色 */
    export function setNavigationBarColor(obj:nbColorObj) { }
    /**动态设置当前页面的标题 */
    export function setNavigationBarTitle(obj:barTitleObj){}
    /**在当前页面显示导航条加载动画 */
    export function showNavigationBarLoading(obj?:wx.callback_success_fail_complete){}

    interface nbColorObj extends wx.callback_success_fail_complete {
        frontColor: string	//	是	前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000	
        backgroundColor: string//是	背景颜色值，有效值为十六进制颜色	
        animation: animationObj		//动画效果	
    }

    interface animationObj {
        duration?: number//	0	否	动画变化时间，单位 ms	
        timingFunc?: string	//'linear'	否	动画变化方式
    }
    interface barTitleObj extends wx.callback_success_fail_complete{
        title	:string	
    }
}