
//罗盘

namespace wx{
    
    /**
     * 开始监听罗盘数据
     */
    export function startCompass(callbacks?:callback_success_fail_complete){}
    /**
     * 停止监听罗盘数据
     */
    export function stopCompass(callbacks?:callback_success_fail_complete){}
    /**
     * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
     */

    export function onCompassChange(callback:(res:onCompassChangeParam)=>any){
        //test
        //callback({direction:45})
    }

    /**
     * direction	number	面对的方向度数
     */
    interface onCompassChangeParam{
        direction:	number
    }
}