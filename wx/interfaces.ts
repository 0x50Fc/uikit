
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
 * 
 * //拍摄视频或从手机相册中选视频。
 * tempFilePath	string	选定视频的临时文件路径	
 * duration	number	选定视频的时间长度	
 * size	number	选定视频的数据量大小	
 * height	number	返回选定视频的高度	
 * width	number	返回选定视频的宽度
 * //
 * audioSources	Array.<string>	支持的音频输入源列表，可在 RecorderManager.start() 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
 * 合法值：
 * auto	自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用
 * buildInMic	手机麦克风，仅限 iOS
 * headsetMic	耳机麦克风，仅限 iOS
 * mic	麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android
 * camcorder	同 mic，适用于录制音视频内容，仅限 Android
 * voice_communication	同 mic，适用于实时沟通，仅限 Android
 * voice_recognition	同 mic，适用于语音识别，仅限 Android
 * 
 */
interface successCallbackRes {
    data?: any,
    tempFilePath?: string,
    statusCode?: number,
    header?: httpHeader,
    tempImagePath?:	string,
    tempThumbPath?:	string,		
    tempVideoPath?:	string,
    duration?:number,
    size?:number,
    height?:number,
    width?:number,
    audioSources?:Array<string>
}

interface failCallbackRes {
    failCode?: string
}
interface completeCallbackRes {
    info?: string
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
    info?: string
}

/**
 * 错误事件的回调函数的参数
 */
interface onErroCallbackRes {
    errMsg?: string,
    errCode?:number
}

/**
 * 接受到服务器的消息事件的回调函数的参数
 */
interface onMessageCallbackRes {
     data?: string | ArrayBuffer 
}
