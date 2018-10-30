
//界面
//键盘

namespace wx {
    /**
     * 显示键盘
     */
    export function showKeyboard(obj: showKeyboardObj) { }
    /**
     * 隐藏键盘
     */
    export function hideKeyboard(callback?: callback_success_fail_complete) { }
    /**
     * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
     */
    export function updateKeyboard(obj: updateKeyboardObj) { }
    /**
     * 监听键盘输入事件
     */
    export function onKeyboardInput(callback?: (res: onKeyboardInputObj) => any) { }
    /**
     * 取消监听键盘输入事件
     */
    export function offKeyboardInput(callback?: Function) { }
    /**
     * 监听用户点击键盘 Confirm 按钮时的事件
     */
    export function onKeyboardConfirm(callback?: (res: onKeyboardObj) => any) { }
    /**
     * 取消监听用户点击键盘 Confirm 按钮时的事件
     */
    export function offKeyboardConfirm(callback?: Function) { }
    /**
     * 监听监听键盘收起的事件
     */
    export function onKeyboardComplete(callback?: (res: onKeyboardObj) => any) { }
    /**
     * 取消监听监听键盘收起的事件
     */
    export function offKeyboardComplete(callback?: Function) { }
    /**
     *  defaultValue	string		是	键盘输入框显示的默认值	
        maxLength	number		是	键盘中文本的最大长度	
        multiple	boolean		是	是否为多行输入	
        confirmHold	boolean		是	当点击完成时键盘是否收起	
        confirmType	string		是	键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
        合法值:
        (   done	完成
            next	下一个
            search	搜索
            go	前往
            send	发送)
     */
    interface showKeyboardObj extends callback_success_fail_complete {
        defaultValue: string
        maxLength: number
        multiple: boolean
        confirmHold: boolean
        confirmType: string
    }
    /**
     * value	string		是	键盘输入框的当前值
     */
    interface updateKeyboardObj extends callback_success_fail_complete {
        value: string
    }
    /**
     * value	Object	键盘输入的当前值
     */
    interface onKeyboardInputObj {
        value: Object
    }
    /**
     * value	string	键盘输入的当前值
     */

    interface onKeyboardObj {
        value: string
    }
}