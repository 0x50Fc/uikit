//开放接口3
//用户数据

namespace wx {

    /**
     * 获取用户信息。
     */

    export function getUserInfo(obj: userInfoObj) { }

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
        success?: (res: userInfoSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
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
 * encryptedData	string	包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文	
 * iv	string	加密算法的初始向量，详细见加密数据解密算法
 */
    interface weRunDataSuccessObj{
        encryptedData	:string	
        iv:	string	
    }

    interface weRunDataObj{
        success:(res:weRunDataSuccessObj)=>any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
}