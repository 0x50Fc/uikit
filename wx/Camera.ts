//相机

namespace wx {
    /**
     * 创建 camera 上下文 CameraContext 对象。
     */
    export function createCameraContext(): CameraContext { return }

    class CameraContext {

        public startRecord(obj?: startRecordObj) { }

        public stopRecord(callback?: wx.callback_success_fail_complete) { }

        public takePhoto(obj?: takePhotoObj) { }

    }
    /**
     * tempThumbPath	string	封面图片文件的临时路径	
     * tempVideoPath	string	视频的文件的临时路径
     */
    interface timeoutCallbackObj {
        tempThumbPath: string
        tempVideoPath: string
    }
    /**
     * timeoutCallback	function		否	超过30s或页面 onHide 时会结束录像
     */
    interface startRecordObj extends wx.callback_success_fail_complete {
        timeoutCallback?: (res: timeoutCallbackObj) => any
    }
    /**
     * quality	string	normal	否	成像质量
     */
    interface takePhotoObj extends wx.callback_success_fail_complete {
        quality?: string
    }
}