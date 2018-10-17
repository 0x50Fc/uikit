

/** 
 * 
progress	number	下载进度百分比	
totalBytesWritten	number	已经下载的数据长度，单位 Bytes	
totalBytesExpectedToWrite	number	预期需要下载的数据总长度，单位 Bytes
*/
interface progressUpdateResp{
    progress: number,
    totalBytesWritten: number,
    totalBytesExpectedToWrite: number
}
//下载进度变化事件的回调函数
interface onProgressUpdateCallback{
    (res:progressUpdateResp): any;
}
//一个可以监听下载进度变化事件，以及取消下载任务的对象
class DownloadTask {
    //中断下载任务
    public  abort() {
    }
    //监听下载进度变化事件
    public  onProgressUpdate(callback: onProgressUpdateCallback) {
    }
}