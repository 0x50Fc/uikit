//设备
//NFC
namespace wx {
    /**判断当前设备是否支持 HCE 能力。 */
    export function getHCEState(callbacks?: wx.callback_success_fail_complete) { }
    /**监听NFC 设备的消息回调 */
    export function onHCEMessage(obj: onHCEMessageObj) { }
    /**发送 NFC 消息。仅在安卓系统下有效 */
    export function sendHCEMessage(obj:sendHCEMessageObj) { }
    /**初始化 NFC 模块 */
    export function startHCE(obj:startHCEObj){}
    export function stopHCE(callbacks?:wx.callback_success_fail_complete){}

    interface onHCEMessageObj {
        messageType: number//	消息类型	
        data: ArrayBuffer //	messageType=1 时 ,客户端接收到 NFC 设备的指令	
        reason: number //	messageType=2 时，原因
    }
    interface sendHCEMessageObj extends wx.callback_success_fail_complete{
        data	:ArrayBuffer		//	二进制数据
    }
    interface startHCEObj extends wx.callback_success_fail_complete{
        aid_list:	Array<string>		//	需要注册到系统的 AID 列表
    }
}