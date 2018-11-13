//设备
//剪贴板
namespace wx {

    /**
     * 获取系统剪贴板的内容
     * 
     * object.success 回调函数
     * data	string	剪贴板的内容
     */
    export function getClipboardData(callbacks: callback_success_fail_complete) { }

    export function setClipboardData(param: setClipboardDataParam) { }

    /**
     * data	string		是	剪贴板的内容
     */
    interface setClipboardDataParam extends callback_success_fail_complete {
        data: string
    }
}