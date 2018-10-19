//相机

namespace wx{
    /**
     * @description 创建 camera 上下文 CameraContext 对象。
     * @param  在自定义组件下，当前组件实例的this，以操作组件内 <camera/> 组件
     */
    export function createCameraContext(thisobj:any):CameraContext{
        return;

    }
}

/**
 * @description cameraContext 与页面内唯一的 <camera/> 组件绑定，操作对应的 <camera/> 组件。
 */
class CameraContext{
    /**
     * @description 拍摄照片
     */

    public takePhoto(param:takePhotoParam){}
    public startRecord(param:startRecordParam){}
    public stopRecord(param:callback_success_fail_complete){}

}
/**
 * quality	string	normal	否	成像质量 取值范围 {high	高质量 normal 普通质量 low 低质量}
success	function		否	接口调用成功的回调函数	
fail	function		否	接口调用失败的回调函数	
complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */
interface takePhotoParam extends callback_success_fail_complete{
    quality?:string
}
/**
 * timeoutCallback	function		否	超过30s或页面 onHide 时会结束录像	
success	function		否	接口调用成功的回调函数	
fail	function		否	接口调用失败的回调函数	
complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 */

interface startRecordParam extends callback_success_fail_complete{
    timeoutCallback:(res:timeoutCallbackRes)=>any
}
/**
 * tempThumbPath	string	封面图片文件的临时路径	
tempVideoPath	string	视频的文件的临时路径
 */
interface timeoutCallbackRes{
    tempThumbPath	:string,	
    tempVideoPath:	string
}