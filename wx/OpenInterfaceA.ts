
//开放接口2
//数据分析
//发票
//登录
//小程序跳转
//支付
namespace wx {
    /**自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。 */
    export function reportAnalytics(eventName: string, data: reportAnalyticsDataObj) { }
    /**选择用户已有的发票 */
    export function chooseInvoice(obj: chooseInvoiceObj) { }
    /**选择用户的发票抬头 */
    export function chooseInvoiceTitle(obj: chooseInvoiceTitleObj) { }
    /**
     * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。
     * 用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。
     */
    export function login(obj: loginObj) { }
    /** 检查登录态是否过期。*/
    export function checkSession(callbacks: wx.callback_success_fail_complete) { }
    /**返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功 */
    export function navigateBackMiniProgram(obj: navigateBackObj) { }
    /**打开另一个小程序 */
    export function navigateToMiniProgram(obj: navigateToObj) { }

    export function requestPayment(obj:requestPaymentObj) { }


    interface reportAnalyticsDataObj {
        key: string		//是	配置中的字段名	
        value: any		//是	上报的数据
    }

    interface chooseInvoiceObj {
        success?: (res: chooseInvoiceSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface chooseInvoiceSuccessObj {
        invoiceInfo: invoiceInfoObj	//用户选中的发票列表
    }

    interface invoiceInfoObj {
        cardId: string	//所选发票卡券的 cardId	
        encryptCode: string	//所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息	
        publisherAppId: string	//发票方的 appId
    }

    interface chooseInvoiceTitleObj {
        success?: (res: chooseInvoiceTitleSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface chooseInvoiceTitleSuccessObj {
        type: string	//抬头类型	
        title: string	//抬头名称	
        taxNumber: string	//抬头税号	
        companyAddress: string	//单位地址	
        telephone: string	//手机号码	
        bankName: string	//银行名称	
        bankAccount: string	//银行账号	
        errMsg: string	//错误信息
    }
    /**
     * code	string	用户登录凭证（有效期五分钟）
     * 开发者需要在开发者服务器后台调用 code2Session，使用 code 换取 openid 和 session_key 等信息
     */
    interface loginSuccessObj {
        code: string
    }
    /**
     * timeout	number		否	超时时间，单位ms
     */
    interface loginObj {
        timeout?: number
        success: (res: loginSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface navigateBackObj extends wx.callback_success_fail_complete {
        extraData: any	//	需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据。 详情。
    }

    interface navigateToObj extends wx.callback_success_fail_complete {
        appId: string		//是	要打开的小程序 appId	
        path?: string		//否	打开的页面路径，如果为空则打开首页	
        extraData?: any	////	否	需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。	
        envVersion?: string	//release	否	要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
    }

    interface requestPaymentObj extends wx.callback_success_fail_complete {
        timeStamp: string	//	是	时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间	
        nonceStr: string		//是	随机字符串，长度为32个字符以下	
        package: string		//是	统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***	
        signType?: string	//MD5	否	签名算法	
        paySign: string		//是	签名，具体签名方案参见 小程序支付接口文档
    }
}