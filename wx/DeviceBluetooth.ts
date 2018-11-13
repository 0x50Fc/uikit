//设备
//蓝牙
namespace wx {
    /**关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。 */
    export function closeBluetoothAdapter(obj: wx.callback_success_fail_complete) { }
    /**获取本机蓝牙适配器状态。 */
    export function getBluetoothAdapterState(obj: getBluetoothAdapterStateObj) { }
    /**获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。 */
    export function getBluetoothDevices(obj: getBluetoothDevicesObj) { }
    /**根据 uuid 获取处于已连接状态的设备。 */
    export function getConnectedBluetoothDevices(obj: getConnectedBluetoothDevicesObj) { }
    /**蓝牙适配器状态变化事件的回调函数 */
    export function onBluetoothAdapterStateChange(callback: (res: onBluetoothAdapterStateChangeObj) => any) { }
    /**监听寻找到新设备的事件 */
    export function onBluetoothDeviceFound(callback:(devices: Array<deviceObj>)=>any){
        
    }
    /**初始化蓝牙模块 */
    export function openBluetoothAdapter(callbacks?:wx.callback_success_fail_complete){
    }
    /**开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索 */
    export function startBluetoothDevicesDiscovery(obj:startBluetoothDevicesDiscoveryObj){}

    export function stopBluetoothDevicesDiscovery(callbacks?:wx.callback_success_fail_complete){}

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

    interface getConnectedBluetoothDevicesObj {
        services: Array<string>	//		蓝牙设备主 service 的 uuid 列表
        success: (res: getBluetoothDevicesSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface onBluetoothAdapterStateChangeObj {
        available: boolean//	蓝牙适配器是否可用	
        discovering: boolean	//蓝牙适配器是否处于搜索状态
    }

    interface startBluetoothDevicesDiscoveryObj extends wx.callback_success_fail_complete{
        services	?:Array<string>		//	要搜索但蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。	
allowDuplicatesKey	?:boolean	//	是否允许重复上报同一设备。如果允许重复上报，则 wx.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。	
interval	?:number	//上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。
    }
}