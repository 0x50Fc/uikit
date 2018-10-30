//广告


namespace wx {


    /**
     * 创建 banner 广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion
     *  判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，
     * 请直接在真机上进行调试。
     */
    export function createBannerAd(obj: createBannerAdObj): BannerAd { return }
    /**
     * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 
     * 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，
     * 请直接在真机上进行调试。
     * @param  obj 广告单元 id
     * @return RewardedVideoAd 激励视频广告组件
     */

    export function createRewardedVideoAd(obj: VideoAdObj): RewardedVideoAd { return }


    class BannerAd {


        public style: bannerADStyle

        /**
         * 显示 banner 广告。
         * @return Promise  banner 广告显示操作的结果
         */
        public show(): Promise<any> { return }

        /**
         * 隐藏 banner 广告
         */
        public hide() { }
        /**
         * 销毁 banner 广告
         */
        public destroy() { }

        /**
         * 监听banner 广告尺寸变化事件
         */
        public onResize(callback: (res: onResizeObj) => any) { }

        /**
         * 取消监听banner 广告尺寸变化事件
         */
        public offResize(callback?: Function) { }

        /**
         * 监听banner 广告加载事件
         */
        public onLoad(callback?: Function) { }

        /**
         * 取消监听banner 广告加载事件
         */
        public offLoad(callback?: Function) { }
        /**
         * 监听banner 广告错误事件
         * 
         * errCode 的合法值
            1000	后端接口调用失败
            1001	参数错误
            1002	广告单元无效
            1003	内部错误
            1004	无合适的广告
            1005	广告组件审核中
            1006	广告组件被驳回
            1007	广告组件被封禁
            1008	广告单元已关闭
         */

        public onError(callback: (res: onErroCallbackRes) => any) { }

        /**
         * 取消监听banner 广告错误事件
         */
        public offError(callback: Function) { }

    }
    /**
     * adUnitId	string		是	广告单元 id	
     * style	Object		是	banner 广告组件的样式
     */

    interface createBannerAdObj {
        adUnitId: string
        style: bannerStyle

    }
    /**
     * left	number		是	banner 广告组件的左上角横坐标	
     * top	number		是	banner 广告组件的左上角纵坐标	
     * width	number		是	banner 广告组件的宽度	
     * height	number		是	banner 广告组件的高度
     */
    interface bannerStyle {
        left: number
        top: number
        width: number
        height: number
    }

    /**
     * left	number	banner 广告组件的左上角横坐标	
     * top	number	banner 广告组件的左上角纵坐标	
     * width	number	banner 广告组件的宽度。最小 300，最大至 屏幕宽度（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。	
     * height	number	banner 广告组件的高度	
     * realWidth	number	banner 广告组件经过缩放后真实的宽度	
     * realHeight	number	banner 广告组件经过缩放后真实的高度
     */

    interface bannerADStyle {
        left: number
        top: number
        width: number
        height: number
        realWidth: number
        realHeight: number
    }

    /**
     * width	number	缩放后的宽度	
     * height	number	缩放后的高度
     */

    interface onResizeObj {

        width: number
        height: number

    }
    /**
     * 激励视频广告组件。激励视频广告组件是一个原生组件，并且是一个全局单例。
     * 层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。激励视频 广告组件默认是隐藏的，
     * 需要调用 RewardedVideoAd.show() 将其显示。
     */

    class RewardedVideoAd {
        /**
         * 隐藏激励视频广告
         */
        public load(): Promise<any> { return }

        /**
         * 显示激励视频广告。激励视频广告将从屏幕下方推入。
         */
        public show(): Promise<any> { return }

        /**
         * 监听激励视频广告加载事件
         */
        public onLoad(callback: Function) { }

        /**
         * 取消监听激励视频广告加载事件
         */
        public offLoad(callback: Function) { }

        /**
         * 监听激励视频错误事件
         * errCode 的合法值
         *  1000	后端接口调用失败
            1001	参数错误
            1002	广告单元无效
            1003	内部错误
            1004	无合适的广告
            1005	广告组件审核中
            1006	广告组件被驳回
            1007	广告组件被封禁
            1008	广告单元已关闭
         */
        public onError(callback: (res: onErroCallbackRes) => any) { }

        /**
         * 取消监听激励视频错误事件
         */
        public offError(callback: Function) { }

        /**
         * 监听用户点击 关闭广告 按钮的事件
         */
        public onClose(callback: (res: VideoAdonCloseObj) => any) { }

        /**
         * 取消监听用户点击 关闭广告 按钮的事件
         */
        public offClose(callback: Function) { }


    }

    /**
     * adUnitId	string		是	广告单元 id
     */
    interface VideoAdObj {
        adUnitId: string
    }
    /**
     * isEnded	boolean	视频是否是在用户完整观看的情况下被关闭的
     */

    interface VideoAdonCloseObj {
        isEnded: boolean

    }

}