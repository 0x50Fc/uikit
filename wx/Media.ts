//媒体



namespace wx {

    /**
     * 结束播放语音
     */
    export function stopVoice(resp: callback_success_fail_complete) {
    }
    /**
     * 创建 audio 上下文 AudioContext 对象。
     * 
     *  id      <audio/> 组件的 id
     *  thisobj 在自定义组件下，当前组件实例的this，以操作组件内 <audio/> 组件 
     */
    export function createAudioContext(id: string, thisobj: any): wxAudioContext {
        return;

    }
    export function createInnerAudioContext(): InnerAudioContext {

    }
}

/**
 * audioContext 通过 id 跟一个 <audio/> 组件绑定，操作对应的 <audio/> 组件。
 */
class wxAudioContext {

    //设置音频地址
    public setSrc(src: string) {

    }
    //播放音频。
    public play() {

    }
    //暂停音频。
    public pause() {

    }
    //跳转到指定位置。
    public seek(position: number) {

    }

}

class InnerAudioContext {
    //音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID
    private _src: string;
    //开始播放的位置（单位：s），默认为 0
    private _startTime: number;
    //是否自动开始播放，默认为 false
    private _autoplay: boolean;
    //是否循环播放，默认为 false
    private _loop: boolean;
    //是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
    private _obeyMuteSwitch: boolean;
    //音量。范围 0~1。默认为 1
    private _volume: number;
    //当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）
    private _duration: number;
    //当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读）
    private _currentTime: number;
    //当前是是否暂停或停止状态（只读）
    private _paused: boolean;
    //音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
    private _buffered: number;

    public get src() {
        return this._src;
    }
    public set src(v) {
        this._src = v;
    }
    public get startTime() {
        return this._startTime;
    }
    public set startTime(v) {
        this._startTime = v;
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
    public get obeyMuteSwitch() {
        return this._obeyMuteSwitch;
    }
    public set obeyMuteSwitch(v) {
        this._obeyMuteSwitch = v;
    }
    public get volume() {
        return this._volume;
    }
    public get duration() {
        return this._duration;
    }
    public get currentTime() {
        return this._currentTime;
    }
    public get paused() {
        return this._paused;
    }
    public get buffered() {
        return this._buffered;
    }


    public play() { }
    public pause() { }
    public stop() { }
    public seek(position: number) { }
    public destroy() { }
    public onCanplay(callback: AudioCallback) { }
    public offCanplay(callback: AudioCallback) { }
    public onPlay(callback: AudioCallback) { }
    public offPlay(callback: AudioCallback) { }
    public onPause(callback: AudioCallback) { }
    public offPause(callback: AudioCallback) { }
    public onStop(callback: AudioCallback) { }
    public offStop(callback: AudioCallback) { }
    public onEnded(callback: AudioCallback) { }
    public offEnded(callback: AudioCallback) { }
    public onTimeUpdate(callback: AudioCallback) { }
    public offTimeUpdate(callback: AudioCallback) { }
    /**
     * res.errCode
     * 0001	系统错误
     * 10002	网络错误
     * 10003	文件错误
     * 10004	格式错误
     * -1	未知错误
     */
    public onError(callback: (res: onErroCallbackRes) => any) { }
    public offError(callback: AudioCallback) { }
    public onWaiting(callback: AudioCallback) { }
    public offWaiting(callback: AudioCallback) { }
    public onSeeking(callback: AudioCallback) { }
    public offSeeking(callback: AudioCallback) { }
    public onSeeked(callback: AudioCallback) { }
    public offSeeked(callback: AudioCallback) { }
}

interface AudioCallback {

}
