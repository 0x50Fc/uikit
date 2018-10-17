

namespace ws {
    /**
    * 
    * 下载文件资源到本地
    * @method downloadFile
    * @param {Objsect}参数
    * @returns {DownloadTask} 一个可以监听下载进度变化事件，以及取消下载任务的对象
    */
    export function downloadFile(param: downloadFileParam): DownloadTask {
        return;
    }

}

/**
* downloadFileParam 参数列表
* @param url{string} 下载资源的 url
* @param filePath?{string} 指定文件下载后存储的路径
* @param success{} 接口调用成功的回调函数
* @param fail{} 接口调用失败的回调函数
* @param complete{} 接口调用结束的回调函数（调用成功、失败都会执行）
*/

interface downloadFileParam {
    url: string,
    header?: httpHeader,
    filePath?: string,
    success?: successCallback,
    fail?: failCallback,
    complete?: completeCallback
}

/**
* httpHeader参数列表
 * @param Host?{string}  指定请求的服务器的域名和端口号
 * @param Accept?{string}  指定客户端能够接收的内容类型
 * @param AcceptCharset?{string} 浏览器可以接受的字符编码集
 * @param AcceptEncoding?{string}指定浏览器可以支持的web服务器返回内容压缩编码类型
 * @param AcceptLanguage?{string}浏览器可接受的语言
 * @param Connection?{string}表示是否需要持久连接。（HTTP 1.1默认进行持久连接）
 * @param ContentLength?{string}请求的内容长度
 * @param ContentType?{string}请求的与实体对应的MIME信息
 * @param Useragent?{string}User-Agent的内容包含发出请求的用户信息User-Agent: Mozilla/5.0 (Linux; X11)
 * @param CacheControl?{string}指定请求和响应遵循的缓存机制	Cache-Control: no-cache
 * @param Cookie?{string}HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。	Cookie: $Version=1; Skin=new;
 * @param Date?{string}请求发送的日期和时间	Date: Tue, 15 Nov 2010 08:12:31 GMT
* 
*/
interface httpHeader {
    Host?: string,
    Accept?: string,
    AcceptCharset?: string,
    AcceptEncoding?: string,
    AcceptLanguage?: string,
    Connection?: string,
    ContentLength?: string,
    ContentType?: string,
    Useragent?: string,
    CacheControl?: string,
    Cookie?: string,
    Date?: string
}

/**
 * tempFilePath	{string}	临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件	
 * statusCode	{number}	开发者服务器返回的 HTTP 状态码
 */
interface successResp {
    tempFilePath: string,
    statusCode: number
}
//接口调用成功的回调函数
interface successCallback {
    (res: successResp): any
}


interface failCallback {
    (err: string): any

}
interface completeCallback {
    (info: string): any

}