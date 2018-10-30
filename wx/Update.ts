//更新


namespace wx {

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
     * @return UpdateManager 更新管理器对象
     */
    export function getUpdateManager(): UpdateManager { return }


    /**
     * UpdateManager 对象，用来管理更新，可通过 wx.getUpdateManager 接口获取实例。
     */

    class UpdateManager {

        /**
         * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
         */
        public applyUpdate() { }

        /**
         * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
         */
        public onCheckForUpdate(callback: (res: onCheckForUpdateObj) => any) { }

        /**
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
         */

        public onUpdateReady(callback: Function) { }

        /**
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
         */

        public onUpdateFailed(callback: Function) { }


    }
    /**
     * hasUpdate	boolean	是否有新版本
     */
    interface onCheckForUpdateObj {
        hasUpdate: boolean
    }


}