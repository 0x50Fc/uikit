//开放接口
//设置
//生物认证
namespace wx {

    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
     */
    export function getSetting(obj: settingObj) {
        // obj.success({authSetting:{"scope.userInfo":true}})
    }
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     */
    export function openSetting(obj: settingObj) { }

    /**
     * 创建打开设置页面的按钮
     */
    export function createOpenSettingButton(type: string, text: string, image: string, style: buttonStyleObj): OpenSettingButton { return }
    /**获取设备内是否录入如指纹等生物信息的接口 */
    export function checkIsSoterEnrolledInDevice(obj: checkIsSoterEnrolledInDeviceObj) { }
    /**获取本机支持的 SOTER 生物认证方式 */
    export function checkIsSupportSoterAuthentication(obj: checkIsSupportSoterAuthenticationObj) { }
    /**开始 SOTER 生物认证。验证流程请参考说明。 */
    export function startSoterAuthentication(obj: startSoterAuthenticationObj) { }


    class AuthSetting {

        /**
         * 是否授权用户信息，对应接口 wx.getUserInfo
         */
        "scope.userInfo"?: boolean

        /**
         * 是否授权地理位置，对应接口 wx.getLocation wx.chooseLocation
         */
        "scope.userLocation"?: boolean

        /**
         * 是否授权通讯地址，对应接口 wx.chooseAddress
         */
        "scope.address"?: boolean

        /**
         * 是否授权发票抬头，对应接口 wx.chooseInvoiceTitle
         */
        "scope.invoiceTitle"?: boolean

        /**
         * 是否授权微信运动步数，对应接口 wx.getWeRunData
         */
        "scope.werun"?: boolean

        /**
         * 是否授权录音功能，对应接口 wx.startRecord
         */
        " scope.record"?: boolean

        /**
         * 是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
         */
        "scope.writePhotosAlbum"?: boolean

        /**
         * 是否授权摄像头
         */
        " scope.camera"?: boolean
    }

    interface successObj {
        authSetting: AuthSetting
    }

    interface settingObj {
        success: (res: successObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    /**
     * 用户点击后打开设置页面的按钮
     */

    class OpenSettingButton {
        /**
         * 按钮的类型
         * (text	可以设置背景色和文本的按钮
            image	只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高)
         */
        type?: string

        /**
         * 按钮上的文本，仅当 type 为 text 时有效
         */
        text: string
        /**
         * 按钮的背景图片，仅当 type 为 image 时有效
         */
        image: string
        /**
         * 按钮的样式
         */

        style: buttonStyleObj

        /**
         * 显示打开设置页面按钮
         */
        public show() { }

        /**
         * 隐藏打开设置页面按钮
         */
        public hide() { }

        /**
         * 销毁打开设置页面按钮
         */
        public destroy() { }

        /**
         * 监听设置页面按钮的点击事件
         */
        public onTap(callback: Function) { }

        /**
         * 取消监听设置页面按钮的点击事件
         */
        public offTap(callback: Function) { }
    }

    interface checkIsSoterEnrolledInDeviceObj {
        checkAuthMode: Array<string>		//是	认证方式
        success: (res: checkIsSoterEnrolledInDeviceSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface checkIsSoterEnrolledInDeviceSuccessObj {
        isEnrolled: boolean	//是否已录入信息	
        errMs: string	//错误信息
    }

    interface checkIsSupportSoterAuthenticationObj {
        success: (res: checkIsSupportSoterAuthenticationSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface checkIsSupportSoterAuthenticationSuccessObj {
        supportMode: Array<string>//	该设备支持的可被SOTER识别的生物识别方式
    }

    interface startSoterAuthenticationObj {
        requestAuthModes: Array<string>	//	是	请求使用的可接受的生物认证方式	
        challenge: string		//是	挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。	
        authContent?: string//	''	否	验证描述，即识别过程中显示在界面上的对话框提示内容
        success: (res: startSoterAuthenticationSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface startSoterAuthenticationSuccessObj {
        authMode: string	//生物认证方式	
        resultJSON: string	//在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文	
        resultJSONSignature: string	//用SOTER安全密钥对 resultJSON 的签名(SHA256 with RSA/PSS, saltlen=20)	
        errCode: number	//错误码	
        errMsg: string	//错误信息
    }
}