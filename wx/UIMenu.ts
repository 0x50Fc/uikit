
//界面
//菜单

namespace wx {

    export function getMenuButtonBoundingClientRect(): rectInfoObj { return }

    // export function setMenuStyle(obj:setMenuStyleObj) { }

    /**
     *  width	number	宽度	
        height	number	高度	
        top	number	上边界坐标	
        right	number	右边界坐标	
        bottom	number	下边界坐标	
        left	number	左边界坐标
     */

    interface rectInfoObj {
        width: number
        height: number
        top: number
        right: number
        bottom: number
        left: number
    }

    // /**
    //  * style	string		是	样式风格
    //  * style 的合法值
    //  *  （light	浅色
    //       dark	深色）
    //  */
    // interface setMenuStyleObj extends callback_success_fail_complete {
    //     style: string
    // }
}