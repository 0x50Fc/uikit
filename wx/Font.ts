
//字体
namespace wx {

    /**
     * 获取一行文本的行高
     * @return number 文本的行高
     */
    export function getTextLineHeight(attri: fontAttribute): number {
        return;
    }
    /**
     * fontStyle	string	normal	否	字体样式
     * (normal	正常 talic	斜体)
     * fontWeight	string	normal	否	字重
     * (normal	正常 bold	粗体)
     * fontSize	number	16	否	字号	
     * fontFamily	string		是	字体名称	
     * text	string		是	文本的内容	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface fontAttribute extends callback_success_fail_complete {
        fontFamily: string
        text: string
        fontStyle?: string
        fontWeight?: string
        fontSize?: number
    }
}