//性能


namespace wx {
    /**
     * 获取性能管理器
     */

    export function getPerformance(): Performance { return }
    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。
     * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     */
    export function triggerGC(){}
    /**
     * 性能管理器
     */
    class Performance {
        /**
         * 可以获取当前时间以微秒为单位的时间戳
         */

        public now(): number { return }
    }
}