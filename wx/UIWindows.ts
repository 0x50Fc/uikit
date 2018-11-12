
//界面
//状态栏
//窗口

namespace wx {


    /**
     * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。
     */
    export function setStatusBarStyle(obj: setStatusBarStyleObj) { }
    /**
     * 监听窗口尺寸变化事件
     */
    export function onWindowResize(callback: (res: onWindowResizeObj) => any) { }
    /**
     * 监听窗口尺寸变化事件
     */

    export function offWindowResize(callback?: Function) { }
    /**
     * style	string		是	样式风格
     */
    interface setStatusBarStyleObj extends callback_success_fail_complete {
        style: string
    }
    /**
     * windowWidth	number	变化后的窗口宽度，单位 px	
     * windowHeight	number	变化后的窗口高度，单位 px
     */
    interface onWindowResizeObj {
        windowWidth: number
        windowHeight: number
    }
}