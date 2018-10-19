
//WebSocket
namespace ws {

    /**
     * 创建一个 WebSocket 连接
     */
    export function connectSocket(param: connectSocketParam): SocketTask {

        return;
    }
    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     */
    export function sendSocketMessage(param: sendSocketMessageParam) {
    }
    /**
     * 监听WebSocket 连接打开事件
     */
    export function onSocketOpen(callback: (res:onOpenCallbackRes)=>any) {
    }
    /**
     * 监听WebSocket 连接关闭事件
     */
    export function onSocketClose(callback:(res: onCloseCallbackRes)=>any) {
    }
    /**
     * 监听WebSocket 接受到服务器的消息事件
     */
    export function onSocketMessage(callback: (res:onMessageCallbackRes)=>any) {
    }
    /**
     * 监听WebSocket 错误事件
     */
    export function onSocketError(callback: (res:onErroCallbackRes)=>any) {
    }
    /**
     * 关闭 WeSocket 连接
     */
    export function closeSocket(param: SocketCloseParam) {
    }
}

/**
 * SocketTask.send(Object object)
通过 WebSocket 连接发送数据

SocketTask.close(Object object)
关闭 WebSocket 连接

SocketTask.onOpen(function callback)
监听WebSocket 连接打开事件

SocketTask.onClose(function callback)
监听WebSocket 连接关闭事件

SocketTask.onError(function callback)
监听WebSocket 错误事件

SocketTask.onMessage(function callback)
监听WebSocket 接受到服务器的消息事件
 */

class SocketTask {
    public send(param: sendSocketMessageParam) {
    }
    public close(param: SocketCloseParam) {
    }
    public onOpen(callback: (res:onOpenCallbackRes)=>any) {
    }
    public onClose(callback: (res:onCloseCallbackRes)=>any) { }
    public onError(callback: (res:onErroCallbackRes)=>any) { }
    public onMessage(callback: (res:onMessageCallbackRes)=>any) { }
}
/**
 * url	string		是	开发者服务器 wss 接口地址	
 * header	Object		否	HTTP Header，Header 中不能设置 Referer	
 * protocols	Array.<string>		否	子协议数组	>= 1.4.0
 * success	function		否	接口调用成功的回调函数	
 * fail	function		否	接口调用失败的回调函数	
 * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */

interface connectSocketParam extends callback_success_fail_complete{
    url: string,
    header?: httpHeader,
    protocols?: Array<string>
}

/**
data	string/ArrayBuffer		是	需要发送的内容	
success	function		否	接口调用成功的回调函数	
fail	function		否	接口调用失败的回调函数	
complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */

interface sendSocketMessageParam extends callback_success_fail_complete {
    data: string | ArrayBuffer,
}
/**
 * code	number	1000（表示正常关闭连接）	否	一个数字值表示关闭连接的状态号，表示连接被关闭的原因。	
reason	string		否	一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。	
success	function		否	接口调用成功的回调函数	
fail	function		否	接口调用失败的回调函数	
complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */
interface SocketCloseParam extends callback_success_fail_complete{
    code?: number,
    reason?: string,
}
