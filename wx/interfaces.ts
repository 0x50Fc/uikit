
//几个公用的接口



namespace wx {
    /**
    * httpHeader参数列表 小写赋值 :
      'content-type': 'application/json'
    */
    export interface httpHeader {
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
     * size	number	选定视频的数据量大小	/文件大小，以字节为单位
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
     * savedFilePath	number	存储后的文件路径
     * files	Array.<string>	指定目录下的文件名数组。
     * Stats|Object stats
    当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。
     */
    export interface successCallbackRes {
        data?: any,
        tempFilePath?: string,
        statusCode?: number,
        header?: httpHeader,
        tempImagePath?: string,
        tempThumbPath?: string,
        tempVideoPath?: string,
        duration?: number,
        size?: number,
        height?: number,
        width?: number,
        audioSources?: Array<string>,
        savedFilePath?: number,
        files?: Array<string>,
        stats?: Stats | Object
    }

    export interface failCallbackRes {
        failCode?: string
    }
    export interface completeCallbackRes {
        info?: string
    }
    //成功，失败，完成 回调 接口
    export interface callback_success_fail_complete {
        success?: (res: successCallbackRes) => any,
        fail?: (res: failCallbackRes) => any,
        complete?: (res: completeCallbackRes) => any
    }

    /**
     * header	连接成功的 HTTP 响应 Header
     */
    export interface onOpenCallbackRes {
        header: httpHeader
    }
    /**
     * WebSocket 连接关闭事件的回调函数的参数
     */

    export interface onCloseCallbackRes {
        info?: string
    }

    /**
     * 错误事件的回调函数的参数
     */
    export interface onErroCallbackRes {
        errMsg?: string,
        errCode?: number
    }

    /**
     * 接受到服务器的消息事件的回调函数的参数
     */
    export interface onMessageCallbackRes {
        data?: string | ArrayBuffer
    }

    /**
     * 描述文件状态的对象
     */
    export class Stats {

        /**
         * 文件的类型和存取的权限，对应 POSIX stat.st_mode
         */
        mode: string

        /**
         * 文件大小，单位：B，对应 POSIX stat.st_size
         */
        size: number

        /**
         * 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime
         */
        lastAccessedTime: number

        /**
         * 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime
         */
        lastModifiedTime: number

        /**
         * 判断当前文件是否一个目录
         */
        public isDirectory(): boolean { return }

        /**
         * 判断当前文件是否一个普通文件
         */
        public isFile(): boolean { return }
    }

}