//实时音视频

namespace wx {
    /**
     * @description 创建 live-pusher 上下文 LivePusherContext 对象
     * @param 在自定义组件下，当前组件实例的this，以操作组件内 <live-pusher/> 组件
     */

    export function createLivePusherContext(thisobj: any) {
    }
    /**
     * @description 创建 live-player 上下文 LivePlayerContext 对象。
     * @param string id <live-player/> 组件的 id
     * @param 在自定义组件下，当前组件实例的this，以操作组件内 <live-player/> 组件
     */
    export function createLivePlayerContext(id: string, thisobj: any) {

    }
    class LivePusherContext {
        /**
         * 播放推流
         */
        public start(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 停止推流
         */
        public stop(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 停止背景音
         */
        public stopBGM(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 暂停推流
         */
        public pause(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 暂停背景音
         */
        public pauseBGM(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 播放背景音
         */
        public playBGM(obj?: playBGMObj) { }
        /**
         * 恢复推流
         */
        public resume(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 恢复背景音
         */
         public resumeBGM(callbacks?: wx.callback_success_fail_complete) { }
         /**
          * 设置背景音音量
          */
         public setBGMVolume(obj:setBGMVolumeObj){}
        /**
         * 切换前后摄像头
         */
        public switchCamera(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 快照
         */
        public snapshot(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 切换
         */
        public toggleTorch(callbacks?: wx.callback_success_fail_complete) { }

    }

    class LivePlayerContext {
        /**
         * 播放
         */
        public play(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 停止
         */
        public stop(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 静音
         */
        public mute(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 暂停
         */
        public pause(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 恢复
         */
        public resume(callbacks?: wx.callback_success_fail_complete) { }
        /**
         * 进入全屏
         */
        public requestFullScreen(obj?: LrequestFullScreenParam) { }
        /**
         * 退出全屏
         */
        public exitFullScreen(callbacks?: wx.callback_success_fail_complete) { }

    }

    //direction	number	 默认值0	否	设置全屏时的方向
    interface LrequestFullScreenParam extends wx.callback_success_fail_complete {
        direction?: number
    }
    /**
     * url	string		是	加入背景混音的资源地址
     */
    interface playBGMObj extends wx.callback_success_fail_complete {
        url: string
    }
    /**
     * volume	string		是	音量大小
     */
    interface setBGMVolumeObj extends wx.callback_success_fail_complete{
        volume	:string		
    }
}

