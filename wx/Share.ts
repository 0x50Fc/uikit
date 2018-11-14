
//转发
namespace wx {

    /**
     * 获取转发详细信息
     */
    export function getShareInfo(obj: getShareInfoObj) { }

    /**
     * 隐藏转发按钮
     */
    export function hideShareMenu(object?: wx.callback_success_fail_complete) { }

    /**
     * 显示当前页面的转发按钮
     */
    export function showShareMenu(obj?: showShareMenuObj) { }

    /**
     * 更新转发属性
     */
    export function updateShareMenu(obj: updateShareMenuObj) { }


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
        success?: (res: getShareInfoSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    /**
     * errMsg	string	错误信息	
     * encryptedData	string	包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法	
     * iv	string	加密算法的初始向量，详细见加密数据解密算法
     */
    interface getShareInfoSuccessObj {
        errMsg: string
        encryptedData: string
        iv: string
    }
    /**
     * withShareTicket	boolean	false	否	是否使用带 shareTicket 的转发详情
     */
    interface showShareMenuObj extends wx.callback_success_fail_complete {
        withShareTicket?: boolean
    }
    /**
     * withShareTicket	boolean		是	是否使用带 shareTicket 的转发详情
     */
    interface updateShareMenuObj extends wx.callback_success_fail_complete {
        withShareTicket?: boolean	//false	否	是否使用带 shareTicket 的转发详情	
        isUpdatableMessage?: boolean	//false	否	是否是动态消息，详见动态消息	>= 2.4.0
        activityId?: string		//否	动态消息的 activityId。通过 createActivityId 接口获取	>= 2.4.0
        templateInfo?: templateInfoObj		//否	动态消息的模板信息
    }

    interface templateInfoObj {
        parameterList: Array<parameterListObj>
    }
    interface parameterListObj {
        name: string		//	参数名	
        value: string		//	参数值
    }

}