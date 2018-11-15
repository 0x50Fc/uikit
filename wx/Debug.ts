//调试

namespace wx{

    /**
     * 获取日志管理器对象。
     */
    export function  getLogManager( level:number):LogManager{return}


    /**
     * 设置是否打开调试开关。此开关对正式版也能生效。
     */
    export function setEnableDebug(param: debugParam){}

    /**
     * enableDebug	boolean		是	是否打开调试
     */
    interface debugParam extends wx.callback_success_fail_complete{
        enableDebug	:boolean
    }

    class LogManager{
        public debug(){}
        public info(){}
        public log(){}
        public warn(){}
    }
}

