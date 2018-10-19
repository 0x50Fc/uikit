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
}

class LivePusherContext {
    /**
     * 播放推流
     */
    public start(param: callback_success_fail_complete) { }
    /**
     * 停止推流
     */
    public stop(param: callback_success_fail_complete) { }
    /**
     * 暂停推流
     */
    public pause(param: callback_success_fail_complete) { }
    /**
     * 恢复推流
     */
    public resume(param: callback_success_fail_complete) { }
    /**
     * 切换前后摄像头
     */
    public switchCamera(param: callback_success_fail_complete) { }
    /**
     * 快照
     */
    public snapshot(param: callback_success_fail_complete) { }
    /**
     * 切换
     */
    public toggleTorch(param: callback_success_fail_complete) { }

}

class LivePlayerContext {
    /**
     * 播放
     */
    public play(param: callback_success_fail_complete) { }
    /**
     * 停止
     */
    public stop(param: callback_success_fail_complete) { }
    /**
     * 静音
     */
    public mute(param: callback_success_fail_complete) { }
    /**
     * 暂停
     */
    public pause(param: callback_success_fail_complete) { }
    /**
     * 恢复
     */
    public resume(param: callback_success_fail_complete) { }
    /**
     * 进入全屏
     */
    public requestFullScreen(param:requestFullScreenParam) { }
    /**
     * 退出全屏
     */
    public exitFullScreen(param: callback_success_fail_complete) { }

}

//direction	number	 默认值0	否	设置全屏时的方向
interface requestFullScreenParam extends callback_success_fail_complete{
    direction?:number
}