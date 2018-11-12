//分包加载



namespace wx{

        /**
     * 触发分包加载，详见 分包加载
     */

    export function loadSubpackage():LoadSubpackageTask {
        return;
    }

    /**
     * name	function		是	分包的名字，可以填 name 或者 root	
        success	function		是	分包加载成功回调事件	
        fail	function		是	分包加载失败回调事件	
        complete	function		是	分包加载结束回调事件(加载成功、失败都会执行）
     */

    interface loadSubpackageObj{
        name:Function
        success: Function
        fail: (res: failCallbackRes) => any
        complete: (res: completeCallbackRes) => any
    }

/**
 * 加载分包任务实例，用于获取分包加载状态
 */
    class LoadSubpackageTask {
        public onProgressUpdate(callback:Function){}
    }
}