//设备
//wifi
namespace wx {
    /**连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。 */
    export function connectWifi(obj: connectWifiObj) { }
    /**获取已连接中的 Wi-Fi 信息。 */
    export function getConnectedWifi(obj:getConnectedWifiObj) { }
    /**请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。 */
    export function getWifiList(callbacks:wx.callback_success_fail_complete){}
    /**监听获取到 Wi-Fi 列表数据事件 */
    export function onGetWifiList(callback?:(res:wifiListObj)=>any){}
    //监听连接上 Wi-Fi 的事件
    export function onWifiConnected(callback?:(res:WifiSuccessObj)=>any){}
    /**设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口。 */
    export function setWifiList(obj:setWifiListObj){}
    /**初始化 Wi-Fi 模块。 */
    export function startWifi(obj?:wx.callback_success_fail_complete){}
    /**关闭 Wi-Fi 模块 */
    export function stopWifi(obj?:wx.callback_success_fail_complete){}

    interface connectWifiObj extends wx.callback_success_fail_complete {
        SSID: string		//	Wi-Fi 设备 SSID	
        BSSID: string		//	Wi-Fi 设备 BSSID	
        password?: string		//	Wi-Fi 设备密码
    }
    interface WifiInfo {
        SSID: string//Wi-Fi 的 SSID
        BSSID: string//Wi-Fi 的 BSSID
        secure: boolean//Wi-Fi 是否安全
        signalStrength: number//Wi-Fi 信号强度
    }
    interface WifiSuccessObj{
        wifi	:WifiInfo//	Wi-Fi 信息
    }
    interface getConnectedWifiObj{
        success?: (res: WifiSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface wifiListObj{
        wifiList:	Array<WifiInfo>	//Wi-Fi 列表数据
    }

    interface setWifiListObj extends wx.callback_success_fail_complete{
        wifiList:	Array<wifiListObj>	//	提供预设的 Wi-Fi 信息列表
    }
    interface wifiListObj{
        SSID	?:string		//	Wi-Fi 的 SSID	
BSSID	?:string		//	Wi-Fi 的 BSSID	
password	?:string		//	Wi-Fi 设备密码
    }


}