//开放接口
//账号信息
//收货地址
//授权

namespace wx {
    /**获取当前帐号信息 */
    export function getAccountInfoSync(): AccoutInfoObj { return }
    /**获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。 */
    export function chooseAddress(obj: AddressObj) { }
    /**
    * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
    * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
    */
    export function authorize(obj: authorizeObj) { }
    /**批量添加卡券。只有通过 认证 的小程序才能使用。更多文档请参考 微信卡券接口文档。 */
    export function addCard(obj: addCardObj) { }
    /**查看微信卡包中的卡券。只有通过 认证 的小程序才能使用。更多文档请参考 微信卡券接口文档 */
    export function openCard(obj: openCardListObj) { }

    interface AccoutInfoObj {
        miniProgram: miniProgramObj	//小程序帐号信息	
        plugin: pluginObj	//插件帐号信息（仅在插件中调用时包含这一项）
    }

    interface miniProgramObj {
        appId: string	//小程序 appId
    }
    interface pluginObj {
        appId: string	//插件 appId	
        version: string	//插件版本号
    }

    interface AddressObj {
        success?: (res: AddressSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface AddressSuccessObj {
        userName: string//	收货人姓名	
        postalCode: string	//邮编	
        provinceName: string	//国标收货地址第一级地址	
        cityName: string	//国标收货地址第一级地址	
        countyName: string//	国标收货地址第一级地址	
        detailInfo: string	//详细收货地址信息	
        nationalCode: string	//收货地址国家码	
        telNumber: string	//收货人手机号码	
        errMsg: string	//错误信息
    }
    /**
     * scope	string		是	需要获取权限的 scope，
     * （scope.userInfo	wx.getUserInfo	用户信息
        scope.userLocation	wx.getLocation	地理位置
        scope.werun	wx.getWeRunData	微信运动步数
        scope.writePhotosAlbum	wx.saveImageToPhotosAlbum	保存到相册）	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface authorizeObj extends callback_success_fail_complete {
        scope: string
    }

    interface addCardObj {
        cardList: Array<cardListObj>
        success?: (res: cardListSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface cardListObj {
        cardId: string	//		卡券 ID	
        cardExt: cardExtObj//	卡券的扩展参数。需进行 JSON 序列化为字符串传入
    }
    interface cardExtObj {
        code?: string		//	用户领取的 code，仅自定义 code 模式的卡券须填写，非自定义 code 模式卡券不可填写，详情	
        openid?: string		//	指定领取者的 openid，只有该用户能领取。 bind_openid 字段为 true 的卡券必须填写，bind_openid 字段为 false 不可填写。	
        timestamp: number		//	时间戳，东八区时间,UTC+8，单位为秒	
        nonce_str?: string		//	随机字符串，由开发者设置传入，加强安全性（若不填写可能被重放请求）。随机字符串，不长于 32 位。推荐使用大小写字母和数字，不同添加请求的 nonce_str 须动态生成，若重复将会导致领取失败。	
        fixed_begintimestamp?: number		//	卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒）。当卡券的有效期类为 DATE_TYPE_FIX_TERM 时专用，标识卡券的实际生效时间，用于解决商户系统内起始时间和领取微信卡券时间不同步的问题。	
        outer_str?: string		//	领取渠道参数，用于标识本次领取的渠道值。	
        signature: string		//	签名，商户将接口列表中的参数按照指定方式进行签名,签名方式使用 SHA1，具体签名方案参见：卡券签名
    }
    interface cardListSuccessObj {
        cardList: Array<cardListSObj>	//卡券添加结果列表
    }
    interface cardListSObj {
        code: string//	加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：code 解码接口	
        cardId: string	//用户领取到卡券的 ID	
        cardExt: string	//卡券的扩展参数，结构请参考前文	
        isSuccess: boolean	//是否成功
    }

    interface openCardObj extends wx.callback_success_fail_complete {
        cardList: Array<Object>		//	需要打开的卡券列表
    }
    interface openCardListObj {
        cardId: string		//	卡券 ID	
        code: string		//	由 wx.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：code 解码接口
    }
}