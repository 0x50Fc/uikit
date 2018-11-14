
//数据上报

namespace wx{
    /**自定义业务数据监控上报接口。
     * @param string name 监控ID，在「小程序管理后台」新建数据指标后获得
     * @param number value 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量
     */
  export function  reportMonitor(name:string,value:number){}
  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   */
  export function  canIUse( schema:string):boolean{return}
}