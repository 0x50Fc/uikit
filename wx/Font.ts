
//字体
namespace wx {

    /**
     * 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址
     */
    export function loadFontFace(attri: fontAttribute): number {
        return;
    }
    /**
family	string		是	定义的字体名称	
source	string		是	字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。	
desc	Object		否	可选的字体描述符
     */
    interface fontAttribute extends callback_success_fail_complete {
        fontFamily: string
        source: string
        desc?: FontDescObj
    }
    /**
     * style	string	'normal'	否	字体样式，可选值为 normal / italic / oblique	
    weight	string	'normal'	否	字体粗细，可选值为 normal / bold / 100 / 200../ 900	
    variant	string	'normal'	否	设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit
     */
    interface FontDescObj {
        style: string
        weight: string
        variant: string
    }
}