
//转发
namespace wx {

    /**
     * 获取转发详细信息
     */
    export function getShareInfo(obj: getShareInfoObj) { }

    /**
     * 隐藏转发按钮
     */
    export function hideShareMenu(object?: callback_success_fail_complete) { }

    /**
     * 显示当前页面的转发按钮
     */
    export function showShareMenu(obj?: showShareMenuObj) { }

    /**
     * 更新转发属性
     */
    export function updateShareMenu(obj: updateShareMenuObj) { }
    /**
     * 主动拉起转发，进入选择通讯录界面。
     */
    export function shareAppMessage(obj: shareAppMessageObj) { }
    /**
     * 监听用户点击右上角菜单的「转发」按钮时触发的事件
     */
    export function onShareAppMessage(callback: (res: onShareAppMessageObj) => any) { }
    /**
     * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件
     */
    export function offShareAppMessage(callback: Function) { }

    /**
     * shareTicket	string		是	shareTicket	
         timeout	number		否	超时时间，单位 ms	>= 1.9.90
         success	function		否	接口调用成功的回调函数	
         fail	function		否	接口调用失败的回调函数	
         complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface getShareInfoObj {
        shareTicket: string
        timeout?: number
        success: (res: getShareInfoSObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }

    /**
     * errMsg	string	错误信息	
     * encryptedData	string	包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法	
     * iv	string	加密算法的初始向量，详细见加密数据解密算法
     */
    interface getShareInfoSObj {
        errMsg: string
        encryptedData: string
        iv: string
    }
    /**
     * withShareTicket	boolean	false	否	是否使用带 shareTicket 的转发详情
     */
    interface showShareMenuObj extends callback_success_fail_complete {
        withShareTicket?: boolean
    }
    /**
     * withShareTicket	boolean		是	是否使用带 shareTicket 的转发详情
     */
    interface updateShareMenuObj extends callback_success_fail_complete {
        withShareTicket: boolean
    }

    /**
     * title	string		否	转发标题，不传则默认使用当前小游戏的昵称。	
    imageUrl	string		否	转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4	
    query	string		否	查询字符串，从这条转发消息进入后，可通过 wx.getLaunchInfoSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。
     */
    interface shareAppMessageObj {
        title?: string
        imageUrl?: string
        query?: string
    }

    /**
     * title	string	转发标题，不传则默认使用当前小游戏的昵称。	
    imageUrl	string	转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4	
    query	string	查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionSync() 或 wx.onShow() 获取启动参数中的 query。
     */
    interface onShareAppMessageObj {
        title: string
        imageUrl: string
        query: string
    }
}