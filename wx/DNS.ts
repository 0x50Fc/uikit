//mdns

namespace wx {

    /**
     * 取消监听mDNS 服务停止搜索的事件
     */
    export function offLocalServiceDiscoveryStop(callback?: Function) {
    }
    /**
     * 取消监听mDNS 服务发现的事件
     */
    export function offLocalServiceFound(callback?: Function) { }

    /**
 * 取消监听mDNS 服务离开的事件
 */
    export function offLocalServiceLost(callback?: Function) {
    }
    /**
     * 取消监听mDNS 服务解析失败的事件
     */
    export function offLocalServiceResolveFail(callback?: Function) { }

    /**
 * 监听mDNS 服务停止搜索的事件
 */
    export function onLocalServiceDiscoveryStop(callback?: Function) {
    }
    /**
     * 监听mDNS 服务发现的事件
     */
    export function onLocalServiceFound(callback?: (res: onLocalServiceFoundObj) => any) { }

    /**
 * 监听mDNS 服务离开的事件
 */
    export function onLocalServiceLost(callback?: (res: onTypeNameObj) => any) {
    }
    /**
     * 监听mDNS 服务解析失败的事件
     */
    export function onLocalServiceResolveFail(callback?: (res: onTypeNameObj) => any) { }

    /**
 * 开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回
 */
    export function startLocalServiceDiscovery(callback?: Function) {
    }
    /**
     * 停止搜索 mDNS 服务
     */
    export function stopLocalServiceDiscovery(callback?: wx.callback_success_fail_complete) { }


    /**
     * serviceType	string	服务的类型	
     * serviceName	string	服务的名称	
     * ip	string	服务的 ip 地址	
     * port	number	服务的端口
     */

    interface onLocalServiceFoundObj {
        serviceType: string
        serviceName: string
        ip: string
        port: number
    }

    /**
     * serviceType	string	服务的类型	
     * serviceName	string	服务的名称
     */
    interface onTypeNameObj {
        serviceType: string
        serviceName: string
    }
    /**
     * serviceType	string		是	要搜索的服务类型	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (res.errMsg 的合法值 值	说明
        invalid param	serviceType 为空
        scan task already exist	在当前 startLocalServiceDiscovery 发起的搜索未停止的情况下，再次调用 startLocalServiceDiscovery)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface Obj extends wx.callback_success_fail_complete {
        serviceType: string
    }
}