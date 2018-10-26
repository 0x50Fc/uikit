
//网络

namespace wx {
    /**
     * 获取网络类型
     */

    export function getNetworkType(callbacks: getNetworkTypeCB) { }
    /**
     * 监听网络状态变化事件
     */

    export function onNetworkStatusChange(callback:(res:onNetworkStatusChangeResp)=>any) { }

    /**
     * networkType	string	网络类型
     * 取值范围:
     * (wifi	wifi 网络
        2g	2g 网络
        3g	3g 网络
        4g	4g 网络
        unknown	Android 下不常见的网络类型
        none	无网络
        )
     */

    interface getNetworkTypeuSccessRes {
        networkType: string
    }
    interface getNetworkTypeCB {
        success?: (res: getNetworkTypeuSccessRes) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    /**
     * isConnected	boolean	当前是否有网络链接	
     * networkType	string	网络类型
     * 取值范围:
     * (wifi	wifi 网络
        2g	2g 网络
        3g	3g 网络
        4g	4g 网络
        unknown	Android 下不常见的网络类型
        none	无网络)
     */
    interface onNetworkStatusChangeResp {
        isConnected: boolean
        networkType: string
    }
}