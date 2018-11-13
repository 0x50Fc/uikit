//设备
//低功耗蓝牙

namespace wx {
    /**断开与低功耗蓝牙设备的连接。 */
    export function closeBLEConnection(obj: closeBLEConnectionObj) { }
    /**连接低功耗蓝牙设备 */
    export function createBLEConnection(obj: createBLEConnectionObj) { }
    /**获取蓝牙设备某个服务中所有特征值(characteristic)。 */
    export function getBLEDeviceCharacteristics(obj: BLEDevicecharacteristicsObj) { }
    /**获取蓝牙设备所有服务(service)。 */
    export function getBLEDeviceServices(obj: getBLEDeviceServicesObj) { }
    /**启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值 */
    export function notifyBLECharacteristicValueChange(obj: notifyObj) { }
    /**监听低功耗蓝牙设备的特征值变化。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。 */
    export function onBLECharacteristicValueChange(obj: (res: BLECharacteristicValueChangeObj) => any) { }
    /**监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等 */
    export function onBLEConnectionStateChange(obj: (res: stateChangeObj) => any) { }
    /**读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用 */
    export function readBLECharacteristicValue(obj: readBLECharacteristicValueObj) { }
    /**向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。 */
    export function writeBLECharacteristicValue(obj:writeBLECharacteristicValue) { }

    interface closeBLEConnectionObj extends wx.callback_success_fail_complete {
        deviceId: string		//	用于区分设备的 id
    }

    interface createBLEConnectionObj extends wx.callback_success_fail_complete {
        deviceId: string		//	用于区分设备的 id	
        timeout?: number		//	超时时间，单位ms，不填表示不会超时
    }
    interface BLEDevicecharacteristicsObj {
        deviceId: string		//	蓝牙设备 id	
        serviceId: string		//	蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
        success: (res: characteristicsSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface characteristicsSuccessObj {
        characteristics: Array<caracteristicsObj>//	设备服务列表
    }
    interface caracteristicsObj {
        uuid: string	//蓝牙设备特征值的 uuid	
        properties: caracteristicsPropertiesObj	//该特征值支持的操作类型
    }
    interface caracteristicsPropertiesObj {
        read: boolean	//该特征值是否支持 read 操作	
        write: boolean	//该特征值是否支持 write 操作	
        notify: boolean	//该特征值是否支持 notify 操作	
        indicate: boolean	//该特征值是否支持 indicate 操作
    }

    interface getBLEDeviceServicesObj {
        deviceId: string		//	蓝牙设备 id
        success: (res: getBLEDeviceServicesSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface getBLEDeviceServicesSuccessObj {
        services: Array<serviceObj>//设备服务列表
    }
    interface serviceObj {
        uuid: string	//蓝牙设备服务的 uuid	
        isPrimary: boolean	//该服务是否为主服务
    }

    interface notifyObj extends wx.callback_success_fail_complete {
        deviceId: string		//	蓝牙设备 id	
        serviceId: string		//	蓝牙特征值对应服务的 uuid	
        characteristicId: string		//	蓝牙特征值的 uuid	
        state: boolean		//	是否启用 notify
    }

    interface BLECharacteristicValueChangeObj {
        deviceId: string//	蓝牙设备 id	
        serviceId: string	//蓝牙特征值对应服务的 uuid	
        characteristicId: string	//蓝牙特征值的 uuid	
        value: ArrayBuffer	//特征值最新的值
    }
    interface stateChangeObj {
        deviceId: string	//蓝牙设备ID	
        connected: boolean	//是否处于已连接状态
    }
    interface readBLECharacteristicValueObj extends wx.callback_success_fail_complete {
        deviceId: string		//	蓝牙设备 id	
        serviceId: string		//	蓝牙特征值对应服务的 uuid	
        characteristicId: string		//	蓝牙特征值的 uuid
    }
    interface writeBLECharacteristicValue extends wx.callback_success_fail_complete {
        deviceId: string		//	蓝牙设备 id	
        serviceId: string		//	蓝牙特征值对应服务的 uuid	
        characteristicId: string		//	蓝牙特征值的 uuid	
        value: ArrayBuffer		//	蓝牙设备特征值对应的二进制值
    }
}