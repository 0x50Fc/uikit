//开放接口
//游戏圈

namespace wx {
    /**
     * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 游戏圈使用指南
     */
    export function createGameClubButton(): GameClubButton { 
        
        return      
    
}
    /**
     * left	number	左上角横坐标	
    top	number	左上角纵坐标	
    width	number	宽度	
    height	number	高度	
    backgroundColor	string	背景颜色	
    borderColor	string	边框颜色	
    borderWidth	number	边框宽度	
    borderRadius	number	边框圆角	
    textAlign	string	文本的水平居中方式
    (   left	居左
        center	居中
        right	居右)	
    fontSize	number	字号	
    lineHeight	number	文本的行高
     */

    export   interface GameClubButtonStyle extends Object {
        left: number
        top: number
        width: number
        height: number
        backgroundColor: string
        borderColor: string
        borderWidth: number
        borderRadius: number
        textAlign: string
        fontSize: number
        lineHeight: number
    }
    /**
     * type	string	按钮的类型
     * (text	可以设置背景色和文本的按钮
        image	只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高)	
    text	string	按钮上的文本，仅当 type 为 text 时有效	
    image	string	按钮的背景图片，仅当 type 为 image 时有效	
    style	Object	按钮的样式	
    icon	string	游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。
    (   green	绿色的图标
        white	白色的图标
        dark	有黑色圆角背景的白色图标
        light	有白色圆角背景的绿色图标)
     */

    interface GameClubButtonAttri {
        type: string
        text: string
        image: string
        style: GameClubButtonStyle
        icon: string
    }

    class GameClubButton {


        obj: GameClubButtonAttri
        /**
         * 显示游戏圈按钮
         */
        public show() { }
        /**
         * 隐藏游戏圈按钮
         */

        public hide() { }

        /**
         * 销毁游戏圈按钮
         */
        public destroy() { }

        /**
         * 监听游戏圈按钮的点击事件
         */
        public onTap(callback: Function) { }
        /**
         * 取消监听游戏圈按钮的点击事件
         */
        public offTap(callback: Function) { }

    }
}