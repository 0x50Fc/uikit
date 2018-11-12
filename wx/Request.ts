
//发起请求
namespace ws {

    export function request(param:requestParam): RequestTask {
        
        return;
    }

}

class RequestTask {

    //中断请求任务
    public abort() {

    }

}
/**
 * url	string		是	开发者服务器接口地址	
 * data	string/object/ArrayBuffer		否	请求的参数	
 * header	Object		否	设置请求的 header，header 中不能设置 Referer。 content-type 默认为 application/json	
 * method	string	GET	否	HTTP 请求方法	
 * dataType	string	json	否	返回的数据格式	
 * responseType	string	text	否	响应的数据类型	>= 1.7.0
 * success	function		否	接口调用成功的回调函数	
 * fail	function		否	接口调用失败的回调函数	
 * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
 * 
 */
interface requestParam  extends wx.callback_success_fail_complete{
    url: string,
    data?: string|Object|ArrayBuffer,
    header?: wx.httpHeader,
    method?: string,//默认值 GET
    dataType?: string,//默认值 json
    responseType?: string,//默认值 text
}
