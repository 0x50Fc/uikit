//第三方平台

namespace wx{

    /**获取第三方平台自定义的数据字段。 */
    export function getExtConfig(obj:ExtConfigObj){}
    /**wx.getExtConfig 的同步版本。 */
    export function getExtConfigSync():any{}

    interface ExtConfigSuccessObj{
        extConfig	:any	//第三方平台自定义的数据
    }
    interface ExtConfigObj{
        success?: (res: ExtConfigSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
}