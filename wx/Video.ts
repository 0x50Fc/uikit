//视频
namespace wx {

    /**
     * 拍摄视频或从手机相册中选视频
     */
    export function chooseVideo(obj: chooseVideoObj) { }
    /**
     * 创建 video 上下文 VideoContext 对象。
     */
    export function createVideoContext(id: string, thisobj: any): VideoContext { return }
    /**
     * 创建 video 上下文 VideoContext 对象。
     */
    export function saveVideoToPhotosAlbum(obj: saveVideoToPhotosAlbumObj) {
        
    }



    /**
     * sourceType	Array.<string>	['album', 'camera']	否	视频选择的来源	
     * compressed	boolean	true	否	是否压缩所选择的视频文件	>= 1.6.0
     * maxDuration	number	60	否	拍摄视频最长拍摄时间，单位秒	
     * camera	string	'back'	否	默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
     */

    interface chooseVideoObj {
        sourceType?: Array<string>
        compressed?: boolean
        maxDuration?: number
        camera?: string
        success: (res: chooseVideoSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }

    interface chooseVideoSuccessObj {
        tempFilePath: string
        duration: number
        size: number
        height: number
        width: number
    }

    class VideoContext {
        public play() { }
        public pause() { }
        public stop() { }
        public seek(position: number) { }

        public sendDanmu(data: setDanmuObj) { }
        /**
         * @param number rate  倍率，支持 0.5/0.8/1.0/1.25/1.5
         */
        public playbackRate(rate: number) { }
        public requestFullScreen(object: fullScreenObj) { }
        public exitFullScreen() { }
        /**
         * 显示状态栏，仅在iOS全屏下有效
         */
        public showStatusBar() { }
        /**
         * 隐藏状态栏，仅在iOS全屏下有效
         */
        public hideStatusBar() { }

    }
    /**errMsg 的合法值
    MEDIA_ERR_NETWORK	当下载时发生错误
    MEDIA_ERR_DECODE	当解码时发生错误
    MEDIA_ERR_SRC_NOT_SUPPORTED	video 的 src 属性是不支持的资源类型
    */
    interface VideoCallbackResp {
        errMsg?: string
    }
    interface VideoCallback {
        (res: VideoCallbackResp): any
    }
    /**
     * object.direction 的合法值
        值	说明
        0	正常竖向
        90	屏幕逆时针90度
        -90	屏幕顺时针90度
     */
    interface fullScreenObj {
        direction: number
    }
    /**
     * text	string		是	弹幕文字	
     * color	string		否	弹幕颜色
     */
    interface setDanmuObj {
        text: string
        color?: string
    }

    interface saveVideoToPhotosAlbumObj extends wx.callback_success_fail_complete{
        filePath:	string		
    }
}

