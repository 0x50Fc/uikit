//Worker
namespace wx {

    /**
     * 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
     * @param scriptPath worker 入口文件的绝对路径
     */
    export function createWorker(scriptPath: string): Worker { return }
    /**
     * Worker 实例，主线程中可通过 wx.createWorker 接口获取，worker 线程中可通过全局变量 worker 获取。
     */
    class Worker {
        /**
         * 向主线程/Worker 线程发送的消息。
         */

        public postMessage(message: any) { }
        /**
         * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。
         */
        public terminate() { }
        /**
         * 监听主线程/Worker 线程向当前线程发送的消息的事件。
         */
        public onMessage(callback: (res: WorkerOnMessageObj) => any) { }

    }
    /**
     * message	Object	主线程/Worker 线程向当前线程发送的消息
     */
    interface WorkerOnMessageObj {
        message: any
    }
}