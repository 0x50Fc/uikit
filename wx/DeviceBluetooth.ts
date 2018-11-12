//设备
//蓝牙
namespace wx {
    /**关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。 */
    export function closeBluetoothAdapter(obj: wx.callback_success_fail_complete) { }
    /**获取本机蓝牙适配器状态。 */
    export function getBluetoothAdapterState(obj: getBluetoothAdapterStateObj) { }
    /**获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。 */
    export function getBluetoothDevices(obj: getBluetoothDevicesObj) { }

    interface getBluetoothAdapterStateObj {
        success: (res: getBluetoothAdapterStateSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any

    }
    interface getBluetoothAdapterStateSuccessObj {
        discovering: boolean	//是否正在搜索设备	
        available: boolean	//蓝牙适配器是否可用
    }
    interface getBluetoothDevicesObj {
        success: (res: getBluetoothDevicesSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any

    }
    interface getBluetoothDevicesSuccessObj {
        devices: Array<deviceObj>//	uuid 对应的的已连接设备列表
    }
    interface deviceObj {
        name: string//	蓝牙设备名称，某些设备可能没有	
        deviceId: string	//用于区分设备的 id	
        RSSI: number	//当前蓝牙设备的信号强度	
        advertisData: ArrayBuffer	//当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。	
        advertisServiceUUIDs: Array<string>//	当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段	
        localName: string	//当前蓝牙设备的广播数据段中的 LocalName 数据段	
        serviceData: ArrayBuffer//	当前蓝牙设备的广播数据段中的 ServiceData 数据段
    }
}