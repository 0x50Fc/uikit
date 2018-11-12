//开放数据

namespace wx {

    /**
     * 获取主域和开放数据域共享的 sharedCanvas。只有开放数据域能调用。
     */
    export function getSharedCanvas(): Canvas { return }

    /**
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
     */
    export function getFriendCloudStorage(obj: friendCloudObj) { }

    /**
     * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口只可在开放数据域下使用。
     */
    export function getGroupCloudStorage(obj: groupCloudSObj) { }
    /**
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
     */
    export function getUserCloudStorage(obj: UserCloudObj) {
    }
    /**
     * 删除用户托管数据当中对应 key 的数据。
     */
    export function removeUserCloudStorage(obj: removeUserCloudObj) { }

    /**
     * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
     */

    export function setUserCloudStorage(obj: setUserCloudStorageObj) { }

    /**
     * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
     * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
     */
    export function authorize(obj: authorizeObj) { }
    /**
     * 根据用户当天游戏时间判断用户是否需要休息
     */
    export function checkIsUserAdvisedToRest(obj: checkIsUserAdvisedToRestObj) { }

    interface KVData {
        key: string
        value: string
    }
    /**
     * 托管数据
     */
    interface UserGameData {
        /**
         * 用户的微信头像 url
         */
        avatarUrl?: string

        /**
         * 用户的微信昵称
         */
        nickname: string

        /**
         * 用户的 openid
         */
        openid: string

        /**
         * 用户的托管 KV 数据列表
         */
        KVDataList: Array<KVData>

    }

    /**
     * data	Array.<UserGameData>	同玩好友的托管数据
     */
    interface cloudSuccessObj {
        data: Array<UserGameData>
    }

    /**
     * keyList	Array.<string>		是	要拉取的 key 列表	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface friendCloudObj {
        keyList: Array<string>
        success: (res: cloudSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }

    /**
     * shareTicket	string		是	群分享对应的 shareTicket	
     * keyList	Array.<string>		是	要拉取的 key 列表
     */
    interface groupCloudSObj {
        shareTicket: string
        keyList: Array<string>
        success: (res: cloudSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    /**
     * keyList	Array.<string>		是	要获取的 key 列表
     */
    interface UserCloudObj {
        keyList: Array<string>
        success: (res: userCloudSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    /**
     * KVDataList	Array.<KVData>	用户托管的 KV 数据列表
     */
    interface userCloudSuccessObj {
        KVDataList: Array<KVData>
    }
    /**
     * keyList	Array.<string>		是	要删除掉 key 列表
     */
    interface removeUserCloudObj extends callback_success_fail_complete {
        keyList: Array<string>
    }
    /**
     * KVDataList	Array.<KVData>		是	要修改的 KV 数据列表
     */
    interface setUserCloudStorageObj extends callback_success_fail_complete {
        KVDataList: Array<KVData>
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
    /**
     * todayPlayedTime	number		是	今天已经玩游戏的时间，单位：秒	
     * success	function		否	接口调用成功的回调函数	
     * (result	boolean	是否建议用户休息)
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface checkIsUserAdvisedToRestObj {
        todayPlayedTime: number
        success: (res: checkIsUserAdvisedToRestSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    interface checkIsUserAdvisedToRestSuccessObj {
        result: boolean
    }
}