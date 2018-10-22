//视频
namespace wx {


    /**
     * 创建 video 上下文 VideoContext 对象。
     */
    export function createVideo(options: createVideoParam): Video {
        return;
    }
}

/**
 * x	number	0	否	视频的左上角横坐标	
y	number	0	否	视频的左上角纵坐标	
width	number	300	否	视频的宽度	
height	number	150	否	视频的高度	
src	string		是	视频的资源地址	
poster	string		是	视频的封面	
initialTime	number	0	否	视频的初始播放位置，单位为 s 秒	
playbackRate	number	1.0	否	视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5	
live	boolean	false	否	视频是否为直播	
objectFit	string	'contain'	否	视频的缩放模式	
**objectFit 合法值
(fill	填充，视频拉伸填满整个容器，不保证保持原有长宽比例
contain	包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白
cover	覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见
)
controls	boolean	true	否	视频是否显示控件	
autoplay	boolean	false	否	视频是否自动播放	
loop	boolean	false	否	视频是否是否循环播放	
muted	boolean	false	否	视频是否禁音播放
 */
interface createVideoParam {
    x?: number
    y?: number
    width?: number
    height?: number
    src: string
    poster: string
    initialTime: number
    playbackRate?: number
    live?: boolean
    objectFit?: string
    controls?: boolean
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
}

class Video {
    /**
     * 视频的左上角横坐标
     */
    _x: number;

    /**
     * 视频的左上角纵坐标
     */
    _y: number;

    /**
     * 视频的宽度
     */
    _width: number;

    /**
     * 视频的高度
     */
    _height: number;

    /**
     * 视频的资源地址
     */
    _src: number;

    /**
     * 视频的封面
     */
    _poster: number;

    /**
     * 视频的初始播放位置，单位为 s 秒
     */
    _initialTime: number;

    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5
     */
    _playbackRate: number;

    /**
     * 视频是否为直播
     */
    _live: number;

    /**
     * 视频的缩放模式
     */
    _objectFit: number;

    /**
     * 视频是否显示控件
     */
    _controls: number;

    /**
     * 视频是否自动播放
     */
    _autoplay: number;

    /**
     * 视频是否是否循环播放
     */
    _loop: number;

    /**
     * 视频是否禁音播放
     */
    _muted: number;

    public get x() {
        return this._x;
    }
    public set x(v) {
        this._x = v;
    }

    public get y() {
        return this._y;
    }
    public set y(v) {
        this._y = v;
    }

    public get width() {
        return this._width;
    }
    public set width(v) {
        this._width = v;
    }

    public get height() {
        return this._height;
    }
    public set height(v) {
        this._height = v;
    }

    public get src() {
        return this._src;
    }
    public set src(v) {
        this._src = v;
    }
    public get poster() {
        return this._poster;
    }
    public set poster(v) {
        this._poster = v;
    }
    public get initialTime() {
        return this._initialTime;
    }
    public set initialTime(v) {
        this._initialTime = v;
    }
    public get playbackRate() {
        return this._playbackRate;
    }
    public set playbackRate(v) {
        this._playbackRate = v;
    }
    public get live() {
        return this._live;
    }
    public set live(v) {
        this._live = v;
    }
    public get objectFit() {
        return this._objectFit;
    }
    public set objectFit(v) {
        this._objectFit = v;
    }
    public get controls() {
        return this._controls;
    }
    public set controls(v) {
        this._controls = v;
    }
    public get autoplay() {
        return this._autoplay;
    }
    public set autoplay(v) {
        this._autoplay = v;
    }
    public get loop() {
        return this._loop;
    }
    public set loop(v) {
        this._loop = v;
    }
    public get muted() {
        return this._muted;
    }
    public set muted(v) {
        this._muted = v;
    }

    //这里没看懂，先注释掉
    // function onwaiting
    // 视频开始缓冲时触发的回调函数

    // function onplay
    // 视频开始播放时触发的回调函数

    // function onpause
    // 视频暂停时触发的回调函数

    // function onended
    // 视频播放到末尾时触发的回调函数

    // function ontimeupdate
    // 每当视频播放进度更新时触发的回调函数

    // function onerror
    // 视频发生错误时触发的回调函数


    public destroy() { }


    /**
     * 播放视频
     */
    public play(): Promise<any> { return }

    /**
     * 暂停视频
     */
    public pause(): Promise<any> { return }

    /**
     * 停止视频
     */
    public stop(): Promise<any> { return }

    /**
     * 跳转到指定位置 单位 s
     */
    public seek(position: number): Promise<any> { return }
    /**
     * 视频全屏
     */
    public requestFullScreen(): Promise<any> { return }
    /**
     * 视频退出全屏
     */
    public exitFullScreen(): Promise<any> { return }
    /**
     * 监听视频播放事件
     */
    public onPlay(callback: VideoCallback) { }
    public offPlay(callback: VideoCallback) { }
    public onPause(callback: VideoCallback) { }
    public offPause(callback: VideoCallback) { }
    public onStop(callback: VideoCallback) { }
    public offStop(callback: VideoCallback) { }
    public onEnded(callback: VideoCallback) { }
    public offEnded(callback: VideoCallback) { }
    /**
     * 监听视频播放进度更新事件
     */
    public onTimeUpdate(callback: VideoCallback) { }
    public offTimeUpdate(callback: VideoCallback) { }
    public onError(callback: VideoCallback) { }
    public offError(callback: VideoCallback) { }
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