//交互


namespace wx {

    /**
     * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
     */
    export function showLoading(obj: showLoadingObj) {
    }
    /**
     * 显示模态对话框
     */
    export function showModal(obj: showModalObj) { }
    /**
     * 显示消息提示框
     */
    export function showToast(obj: showToastObj) { }
    /**
     * 隐藏消息提示框
     */
    export function hideToast(callbacks?: callback_success_fail_complete) { }
    /**
     * 隐藏 loading 提示框
     */
    export function hideLoading(callbacks?: callback_success_fail_complete) { }
    /**
     * ​显示操作菜单
     */
    export function showActionSheet(obj:showActionSheetObj) { }


    /**
     * title	string		是	提示的内容	
     * mask	boolean	false	否	是否显示透明蒙层，防止触摸穿透
     */
    interface showLoadingObj extends callback_success_fail_complete {
        title: string
        mask?: boolean
    }
    /**
     *  title	string		是	提示的标题	
        content	string		是	提示的内容	
        showCancel	boolean	true	否	是否显示取消按钮	
        cancelText	string	'取消'	否	取消按钮的文字，最多 4 个字符	
        cancelColor	string	#000000	否	取消按钮的文字颜色，必须是 16 进制格式的颜色字符串	
        confirmText	string	'确定'	否	确认按钮的文字，最多 4 个字符	
        confirmColor	string	#3cc51f	否	确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
     */

    interface showModalObj {
        title: string
        content: string
        showCancel?: boolean
        cancelText?: string
        cancelColor?: string
        confirmText?: string
        confirmColor?: string
        success?: (res: showModalSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any

    }
    /**
     * confirm	boolean	为 true 时，表示用户点击了确定按钮	
     * cancel	boolean	为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     */
    interface showModalSuccessObj {
        confirm: boolean
        cancel: boolean
    }

    /**
     * title	string		是	提示的内容	
     * icon	string	'success'	否	图标	
     * image	string		否	自定义图标的本地路径，image 的优先级高于 icon	>= 1.1.0
     * duration	number	1500	否	提示的延迟时间	
     * mask	boolean	false	否	是否显示透明蒙层，防止触摸穿透
     */

    interface showToastObj extends callback_success_fail_complete {
        title: string
        icon?: string
        image?: string
        duration?: number
        mask?: boolean
    }

    /**
     * itemList	Array.<string>		是	按钮的文字数组，数组长度最大为 6	
     * itemColor	string	#000000	否	按钮的文字颜色
     */

    interface showActionSheetObj {
        itemList: Array<string>
        itemColor?: string
        success?: (res: showActionSheetSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    /**
     * tapIndex	number	用户点击的按钮序号，从上到下的顺序，从0开始
     */
    interface showActionSheetSuccessObj{
        tapIndex	:number	

    }
}