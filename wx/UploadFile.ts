

//上传
namespace wx {

    /**
     * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
     */
    export function uploadFile(param: uploadFileParam):UploadTask {
        return;
    }
}

/**
 * url	string		是	开发者服务器地址	
filePath	string		是	要上传文件资源的路径	
name	string		是	文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容	
header	Object		否	HTTP 请求 Header，Header 中不能设置 Referer	
formData	Object		否	HTTP 请求中其他额外的 form data	
success	function		否	接口调用成功的回调函数	
fail	function		否	接口调用失败的回调函数	
complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */

interface uploadFileParam extends callback_success_fail_complete {
    url: string,
    filePath: string,
    name: string,
    header?: httpHeader,
    formData?: any
}

/**
 * progress     上传进度
 * totalBytesSent  已经上传的数据长度
 * totalBytesExpectedToSend 预期需要上传的数据总长度
 */
interface onProgressUpdateCallbackRes {
    progress: number,
    totalBytesSent: number,
    totalBytesExpectedToSend: number
}

/**
 * 一个可以监听上传进度变化事件，以及取消上传任务的对象
 */
class UploadTask {
    //中断上传任务
    abort() {
    }
    //监听上传进度变化事件
    onProgressUpdate(callback: (res:onProgressUpdateCallbackRes)=>any) {
    }
}