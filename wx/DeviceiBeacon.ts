//设备
//iBeacon
namespace wx {
    /**获取所有已搜索到的 iBeacon 设备 */
    export function getBeacons(obj: getBeaconsObj) { }
    /**监听iBeacon 服务的状态变化 */
    export function onBeaconServiceChange(callback?: (res: onBeaconServiceChangeObj) => any) { }
    /**监听iBeacon 设备更新事件 */
    export function onBeaconUpdate(callback?: (res: getBeaconsSucessObj) => any) {
     }
    /**开始搜索附近的 iBeacon 设备 */
    export function startBeaconDiscovery(obj:BeaconDiscoveryObj) { }
    export function stopBeaconDiscovery(callback?:wx.callback_success_fail_complete){}

    interface IBeaconInfo {
        uuid: string//iBeacon 设备广播的 uuid

        major: string//iBeacon 设备的主 id

        minor: string//iBeacon 设备的次 id

        proximity: number//表示设备距离的枚举值

        accuracy: number//iBeacon 设备的距离

        rssi: number//表示设备的信号强度
    }

    interface getBeaconsSucessObj {
        beacons: Array<IBeaconInfo>	//iBeacon 设备列表
    }
    interface getBeaconsObj {
        success?: (res: getBeaconsSucessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface onBeaconServiceChangeObj {
        available: boolean	//服务目前是否可用	
        discovering: boolean//	目前是否处于搜索状态
    }

    interface BeaconDiscoveryObj {
        uuids: Array<string>		//	iBeacon 设备广播的 uuid 列表	
        ignoreBluetoothAvailable?: boolean		//	是否校验蓝牙开关，仅在 iOS 下有效
    }
}