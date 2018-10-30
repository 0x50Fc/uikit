//开放接口
//登录

namespace wx {
    /**
     * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。
     * 用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。
     */
    export function login(obj:loginObj) { }
    /**
     * 检查登录态是否过期。
     */

    export function checkSession(callbacks:callback_success_fail_complete){}

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
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
}