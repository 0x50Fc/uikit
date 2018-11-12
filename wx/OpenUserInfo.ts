//开放接口
//用户数据

namespace wx {

    /**
     * 获取用户信息。
     */

    export function getUserInfo(obj: userInfoObj) { }
    /**
     * 创建用户信息按钮
     */
    export function createUserInfoButton(obj:userInfoButtonObj):UserInfoButton { return}

    /**
     * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。
     */
    export function getWeRunData(obj:weRunDataObj){}


    /**
     * withCredentials	boolean		否	是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。	
     *  lang	string	en	否	显示用户信息的语言
     * (en	英文
        zh_CN	简体中文
        zh_TW	繁体中文)	
     * success	function		否	接口调用成功的回调函数	
     *  fail	function		否	接口调用失败的回调函数	
     *  complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface userInfoObj {
        withCredentials?: boolean
        lang?: string
    }

    /**
     * userInfo	UserInfo	用户信息对象，不包含 openid 等敏感信息	
     * rawData	string	不包括敏感信息的原始数据字符串，用于计算签名	
     * signature	string	使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密	
     * encryptedData	string	包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密	
     * iv	string	加密算法的初始向量，详见 用户数据的签名验证和加解密
     */

    interface userInfoSuccessObj {
        userInfo: UserInfo
        rawData: string
        signature: string
        encryptedData: string
        iv: string
    }

    class UserInfo {
        /**
         * 用户昵称
         */
        nickName: string

        /**
         * 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，
         * 0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），
         * 用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。
         */
        avatarUrl: string
        /**
         * 用户性别
         * (0	未知
            1	男性
            2	女性)
         */
        gender: number
        /**
         * 用户所在国家
         */
        country: string
        /**
         * 用户所在省份
         */
        province: string
        /**
         * 用户所在城市
         */
        city: string
        /**
         * 显示 country，province，city 所用的语言
         * (en	英文
            zh_CN	简体中文
            zh_TW	繁体中文)
         */
        language: string

    }

    /**
     * type	string		是	按钮的类型	
    text	string		是	按钮上的文本，仅当 type 为 text 时有效	
    image	string		是	按钮的背景图片，仅当 type 为 image 时有效	
    style	Object		是	按钮的样式	
    withCredentials	boolean		是	是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。	
    lang	string	en	否	描述用户信息的语言a
     */
    interface userInfoButtonObj {
        type: string
        text: string
        image: string
        style: buttonStyleObj
        withCredentials: boolean
    }

    /**
     * left	number		是	左上角横坐标	
        top	number		是	左上角纵坐标	
        width	number		是	宽度	
        height	number		是	高度	
        backgroundColor	string		是	背景颜色	
        borderColor	string		是	边框颜色	
        borderWidth	number		是	边框宽度	
        borderRadius	number		是	边框圆角	
        textAlign	string		是	文本的水平居中方式
        (   left	居左
            center	居中
            right	居右)	
        fontSize	number		是	字号	
        lineHeight	number		是	文本的行高
     */

  export  interface buttonStyleObj {
        left: number
        top: number
        width: number
        height: number
        backgroundColor: string
        borderColor: string
        borderWidth: number
        borderRadius: number
        textAlign: string
        fontSize: number
        lineHeight: number
    }

    class UserInfoButton {
        /**
         * 按钮的类型
         * (text	可以设置背景色和文本的按钮
            image	只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高)
         */
        type: string
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
         * 显示用户信息按钮
         */
        public show() { }

        /**
         * 隐藏用户信息按钮。
         */
        public hide() { }

        /**
         * 销毁用户信息按钮
         */
        public destroy() { }

        /**
         * 监听用户信息按钮的点击事件
         */
        public onTap(callback: (res:onTapObj)=>any) { }

        /**
         * 取消监听用户信息按钮的点击事件
         */
        public offTap(callback: Function) { }

    }

    /**
     * userInfo	UserInfo	用户信息对象，不包含 openid 等敏感信息	
    rawData	string	不包括敏感信息的原始数据字符串，用于计算签名	
    signature	string	使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature	
    encryptedData	string	包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法	
    iv	string	加密算法的初始向量，详细见加密数据解密算法
     */
    interface onTapObj {
        userInfo: UserInfo
        rawData: string
        signature: string
        encryptedData: string
        iv: string
    }
/**
 * encryptedData	string	包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文	
 * iv	string	加密算法的初始向量，详细见加密数据解密算法
 */
    interface weRunDataSuccessRes{
        encryptedData	:string	
        iv:	string	
    }

    interface weRunDataObj{
        success:(res:weRunDataSuccessRes)=>any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
}