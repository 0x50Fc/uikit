
//几个公用的接口

/**
* httpHeader参数列表 小写赋值 :
  'content-type': 'application/json'
*/
interface httpHeader {
}

/**
 * tempFilePath	{string}	临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件	
 * statusCode	{number}	开发者服务器返回的 HTTP 状态码
 *  data	开发者服务器返回的数据
 * 开发者服务器返回的 HTTP 状态码
 * header	Object	开发者服务器返回的 HTTP Response Header
 * //camera use :
 * tempImagePath:	string	照片文件的临时路径
 * tempThumbPath	string	封面图片文件的临时路径	
 * tempVideoPath	string	视频的文件的临时路径
 */
interface successCallbackRes {
    data: any,
    tempFilePath: string,
    statusCode: number,
    header: httpHeader,
    tempImagePath:	string,
    tempThumbPath:	string,		
    tempVideoPath:	string	
}

interface failCallbackRes {
    failCode: string
}
interface completeCallbackRes {
    info: string
}
//成功，失败，完成 回调 接口
interface callback_success_fail_complete{
    success?: (res:successCallbackRes)=>any,
    fail?: (res:failCallbackRes)=>any,
    complete?: (res:completeCallbackRes)=>any
}

/**
 * header	连接成功的 HTTP 响应 Header
 */
interface onOpenCallbackRes {
    header: httpHeader
}
/**
 * WebSocket 连接关闭事件的回调函数的参数
 */

interface onCloseCallbackRes {
    info: string
}

/**
 * 错误事件的回调函数的参数
 */
interface onErroCallbackRes {
    errMsg: string,
    errCode:number
}

/**
 * 接受到服务器的消息事件的回调函数的参数
 */
interface onMessageCallbackRes {
     data: string | ArrayBuffer 
}
