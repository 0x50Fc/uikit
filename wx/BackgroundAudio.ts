//背景音频

namespace wx {
    /**
     * 获取全局唯一的背景音频管理器
     */
    export function getBackgroundAudioManager(): BackgroundAudioManager { return }

    /**
     * 从 >= 1.2.0 开始，本接口不再维护，建议使用 wx.getBackgroundAudioManager 代替
     * 获取后台音乐播放状态。
     */

    export function getBackgroundAudioPlayerState(obj: getBackgroundAudioPlayerStateObj) { }
    /**
     * 从 >= 1.2.0 开始，本接口不再维护，建议使用 wx.getBackgroundAudioManager 代替监听音乐暂停事件。
     */

    export function onBackgroundAudioPause(callback?: Function) { }
    export function onBackgroundAudioPlay(callback?: Function) { }
    export function onBackgroundAudioStop(callback?: Function) { }
    export function pauseBackgroundAudio(callback?: wx.callback_success_fail_complete) { }
    export function playBackgroundAudio(callback: playBackgroundAudioObj) { }
    export function seekBackgroundAudio(callback: seekBackgroundAudioObj) { }
    export function stopBackgroundAudio(callback?: wx.callback_success_fail_complete) {
     }

    class BackgroundAudioManager {

        //音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID
        public src: string;
        //开始播放的位置（单位：s），默认为 0
        public startTime: number;
        //音频标题，用于原生音频播放器音频标题（必填）。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
        public title: string;
        //专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
        public epname: string;
        //歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
        public singer: string;
        //封面图 URL，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图
        public coverImgUrl: string;
        //页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
        public webUrl: string;
        //音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频
        public protocol: string;
        //当前音频的长度（单位：s），只有在有合法 src 时返回
        public readonly duration: number;
        //当前音频的播放位置（单位：s），只有在有合法 src 时返回
        public readonly currentTime: number;
        //当前是否暂停或停止
        public readonly paused: boolean;
        //音频已缓冲的时间，仅保证当前播放时间点到此时间点内容已缓冲
        public readonly buffered: number


        public play() { }
        public pause() { }
        public stop() { }
        public seek(position: number) { }
        public onCanplay(callback?: Function) { }

        public onPlay(callback?: Function) { }

        public onPause(callback?: Function) { }

        public onStop(callback?: Function) { }

        public onEnded(callback?: Function) { }

        public onTimeUpdate(callback?: Function) { }

        /**
         * res.errCode
         * 0001	系统错误
         * 10002	网络错误
         * 10003	文件错误
         * 10004	格式错误
         * -1	未知错误
         */
        public onError(callback?: Function) { }
        /**
         * 监听用户在系统音乐播放面板点击下一曲事件（仅iOS）
         */
        public onNext(callback?: Function) { }

        public onPrev(callback?: Function) { }

        public onWaiting(callback?: Function) { }

        public onSeeking(callback?: Function) { }

        public onSeeked(callback?: Function) { }
    }

    /**
     * duration	number	选定音频的长度（单位：s），只有在音乐播放中时返回	
    currentPosition	number	选定音频的播放位置（单位：s），只有在音乐播放中时返回	
    status	number	播放状态
    (0	暂停中
    1	播放中
    2	没有音乐播放)	
    downloadPercent	number	音频的下载进度百分比，只有在音乐播放中时返回	
    dataUrl	string	歌曲数据链接，只有在音乐播放中时返回
     */
    interface getBackgroundAudioPlayerStateSuccessObj {
        duration: number
        currentPosition: number
        status: number
        downloadPercent: number
        dataUrl: string
    }

    interface getBackgroundAudioPlayerStateObj {
        success: (res: getBackgroundAudioPlayerStateSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }
    /**
     * dataUrl	string		是	音乐链接，目前支持的格式有 m4a, aac, mp3, wav	
     * title	string		否	音乐标题	
     * coverImgUrl	string		否	封面URL
     */

    interface playBackgroundAudioObj extends wx.callback_success_fail_complete {

        dataUrl: string
        title?: string
        coverImgUrl?: string

    }
    /**
     * position	number		是	音乐位置，单位：秒
     */
    interface seekBackgroundAudioObj extends wx.callback_success_fail_complete {
        position: number

    }


}