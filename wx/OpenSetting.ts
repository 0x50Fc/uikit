//开放接口
//设置
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
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
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
}