//媒体 录音

namespace wx {
    /**
     * 获取全局唯一的录音管理器 RecorderManager
     */
    export function getRecorderManager():RecorderManager { return;}

}

class RecorderManager {
    /**
     * 开始录音
     */
    public start(options: startParam = {
        duration: 60000, sampleRate: 8000,
        numberOfChannels: 2, encodeBitRate: 48000, format: "aac", audioSource: "auto"
    }) { }

    /**
     * 暂停录音
     */
    public pause() { }

    /**
     * 继续录音
     */
    public resume() { }

    /**
     * 停止录音
     */
    public stop() { }

    /**
     * 监听录音开始事件
     */
    public onStart(callback: RecordCallbacks) { }

    /**
     * 监听录音继续事件
     */
    public onResume() { }

    /**
     * 监听录音暂停事件
     */
    public onPause(callback: RecordCallbacks) { }

    /**
     * 监听录音结束事件
     */
    public onStop(callback: RecordCallbacks) { }

    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
     */
    public onFrameRecorded(callback: RecordCallbacks) { }

    /**
     * 监听录音错误事件
     */
    public onError(callback: RecordCallbacks) { }

    /**
     * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     */
    public onInterruptionBegin(callback: RecordCallbacks) { }

    /**
     * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
     */
    public onInterruptionEnd(callback: RecordCallbacks) { }

}

/**
 * duration	number	60000	否	录音的时长，单位 ms，最大值 600000（10 分钟）	
sampleRate	number	8000	否	采样率	
numberOfChannels	number	2	否	录音通道数	
encodeBitRate	number	48000	否	编码码率，有效值见下表格	
format	string	aac	否	音频格式	
frameSize	number		否	指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。	
audioSource	string	auto	否	指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源	>= 2.1.0
 */
interface startParam {
    duration?: number
    sampleRate?: number
    numberOfChannels?: number
    encodeBitRate?: number
    format?: string
    frameSize?: number
    audioSource?: string
}

/**
 * tempFilePath	string	录音文件的临时路径
 * frameBuffer	ArrayBuffer	录音分片数据	
 * isLastFrame	boolean	当前帧是否正常录音结束前的最后一帧
 * errMsg	string	错误信息
 */
interface RecordCallbacksResp {
    tempFilePath?: string,
    frameBuffer?: ArrayBuffer,
    isLastFrame?: boolean,
    errMsg?: string
}

interface RecordCallbacks {
    (res: RecordCallbacksResp): any
}