
//下载


namespace wx {
    /**
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

interface downloadFileParam extends wx.callback_success_fail_complete{
    url: string,
    header?: wx.httpHeader,
    filePath?: string
}

/** 
 * 
progress	number	下载进度百分比	
totalBytesWritten	number	已经下载的数据长度，单位 Bytes	
totalBytesExpectedToWrite	number	预期需要下载的数据总长度，单位 Bytes
*/
interface progressUpdateCallbackRes{
    progress: number,
    totalBytesWritten: number,
    totalBytesExpectedToWrite: number
}
//一个可以监听下载进度变化事件，以及取消下载任务的对象
class DownloadTask {
    //中断下载任务
    public  abort() {
    }
    //监听下载进度变化事件
    public  onProgressUpdate(callback: (res:progressUpdateCallbackRes)=>any) {
    }
}