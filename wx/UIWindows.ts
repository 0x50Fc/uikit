
//界面
//窗口

namespace wx {
    /**
     * 监听窗口尺寸变化事件
     */
    export function onWindowResize(callback: (res: onWindowResizeObj) => any) { }
    /**
     * 监听窗口尺寸变化事件
     */

    export function offWindowResize(callback?: Function) { }
    /**
     * windowWidth	number	变化后的窗口宽度，单位 px	
     * windowHeight	number	变化后的窗口高度，单位 px
     */
    interface onWindowResizeObj {
        windowWidth: number
        windowHeight: number
    }
}