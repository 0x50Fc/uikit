//调试

namespace wx{

    /**
     * 设置是否打开调试开关。此开关对正式版也能生效。
     */
    export function setEnableDebug(param: debugParam){}

    /**
     * enableDebug	boolean		是	是否打开调试
     */
    interface debugParam extends callback_success_fail_complete{
        enableDebug	:boolean
    }
}

