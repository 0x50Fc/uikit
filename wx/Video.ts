//视频
namespace wx {


    /**
     * 创建 video 上下文 VideoContext 对象。
     */
    export function createVideoContext(id: string, thisobj?: any): VideoContext {
        return;

    }
    /**
     * 拍摄视频或从手机相册中选视频。
     */
    export function chooseVideo(param: chooseVideoParam = {
        sourceType: ['album', 'camera'],
        compressed: true, maxDuration: 60, camera: 'back'
    }) {
    }

    /**
     * 保存视频到系统相册
     */
    export function saveVideoToPhotosAlbum(param: saveVideoToPhotosAlbumParam) {
    }
}

class VideoContext {
    /**
     * 播放视频
     */
    public play() { }

    /**
     * 暂停视频
     */
    public pause() { }

    /**
     * 停止视频
     */
    public stop() { }

    /**
     * 跳转到指定位置 单位 s
     */
    public seek(position: number) { }

    /**
     * 播放视频
     */
    public sendDanmu(data: sendDanmuParam) { }

    /**
     * 设置倍速播放
     */
    public playbackRate(rate: number) { }

    /**
     * 进入全屏
     */
    public requestFullScreen(object:requestFullScreenParam) { }

    /**
     * 退出全屏
     */
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

/**
 * text:	string,		是	弹幕文字	
 * color?:	string		否	弹幕颜色
 */
interface sendDanmuParam {
    text: string,
    color?: string
}
/**
 * direction	number		是	设置全屏时视频的方向，不指定则根据宽高比自动判断。	>= 1.7.0
 * 0	正常竖向
 * 90	屏幕逆时针90度
 * -90	屏幕顺时针90度
 */

interface requestFullScreenParam{
    direction:number
}





/**
 * sourceType	Array.<string>	['album', 'camera']	否	视频选择的来源	
compressed	boolean	true	否	是否压缩所选择的视频文件	>= 1.6.0
maxDuration	number	60	否	拍摄视频最长拍摄时间，单位秒	
camera	string	'back'	否	默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
 */
interface chooseVideoParam extends callback_success_fail_complete {
    sourceType?: Array<string>,
    compressed?: boolean,
    maxDuration?: number,
    camera?: string
}

/**
 * filePath	string		是	视频文件路径，可以是临时文件路径也可以是永久文件路径
 */
interface saveVideoToPhotosAlbumParam extends callback_success_fail_complete {
    filePath: string
}