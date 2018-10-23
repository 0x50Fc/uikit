//数据缓存

namespace wx {

    /**
     * 从本地缓存中异步获取指定 key 的内容
     */
    export function getStorage(keyAttri: storageParam) { }
    /**
     * wx.getStorage 的同步版本
     * @param 本地缓存中指定的 key
     * @return key对应的内容
     */
    export function getStorageSync(key: string): Object | string {
        return;
    }
    /**
     * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。数据存储生命周期跟小程序本身一致，
     * 即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。数据存储上限为 10MB。
     */
    export function setStorage(attri: setStorageParam) {

    }
    /**
     * wx.setStorage 的同步版本
     */
    export function setStorageSync(key: string, data: Object | string) { }
    /**
     * 从本地缓存中移除指定 key
     */
    export function removeStorage(keyAttri: storageParam) { }
    /**
     * wx.removeStorage 的同步版本
     * @param key 本地缓存中指定的 key
     */
    export function removeStorageSync(key: string) { }
    /**
     * 清理本地数据缓存
     */
    export function clearStorage(callbacks: callback_success_fail_complete) { }
    /**
     * wx.clearStorage 的同步版本
     */
    export function clearStorageSync() { }
    /**
     * 异步获取当前storage的相关信息
     */
    export function getStorageInfo(success?: (res: getStorageInfoSuccessResp) => any, fail?: (res: failCallbackRes) => any,
        complete?: (res: completeCallbackRes) => any) { }

    export function getStorageInfoSync(): getStorageInfoSuccessResp { return; }

    /**
     * key	string		是	本地缓存中指定的 key	
     * success	function		否	接口调用成功的回调函数	
     * res.data 为成功后返回数据
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface storageParam extends callback_success_fail_complete {
        key: string
    }
    /**
     * key	string		是	本地缓存中指定的 key	
     * data	Object/string		是	需要存储的内容
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface setStorageParam extends callback_success_fail_complete {
        key: string
        data: Object | string
    }
    /**
     * keys	Array.<string>	当前 storage 中所有的 key	
     * currentSize	number	当前占用的空间大小, 单位 KB	
     * limitSize	number	限制的空间大小，单位 KB
     */
    interface getStorageInfoSuccessResp {
        keys: Array<string>
        currentSize: number
        limitSize: number
    }

}