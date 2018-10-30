//开放接口
//意见反馈
//客服消息
//开放数据域

namespace wx {

    /**
     * 创建打开意见反馈页面的按钮
     */
    export function createFeedbackButton(type: string, text: string, image: string, style: buttonStyleObj) { }
    /**
     * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 客服消息接入
     */
    export function openCustomerServiceConversation(obj: CustomerServiceConversationObj) { }
    /**
     * 获取开放数据域
     */
    export function getOpenDataContext(): OpenDataContext { return}
    /**
     * 监听主域发送的消息
     */
    export function onMessage(callback: Function) { }

    class FeedbackButton {
        /**
         * 按钮的类型
         * (text	可以设置背景色和文本的按钮
            image	只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高)
         */
        type?: string
        /**
         * 按钮上的文本，仅当 type 为 text 时有效
         */
        text: string
        /**
         * 按钮的背景图片，仅当 type 为 image 时有效
         */
        image: string
        /**
         * 按钮的样式
         */

        style: buttonStyleObj
        /**
         * 意见反馈按钮的图标，仅当 object.type 参数为 image 时有效。
         */
        icon: string

        /**
         * 显示意见反馈页面按钮
         */
        public show() { }

        /**
         * 隐藏意见反馈页面按钮
         */
        public hide() { }

        /**
         * 销毁意见反馈页面按钮
         */
        public destroy() { }

        /**
         * 监听意见反馈按钮的点击事件
         */
        public onTap(callback: Function) { }

        /**
         * 取消监听意见反馈按钮的点击事件
         */
        public offTap(callback: Function) { }
    }

    /**
     *  sessionFrom	string	''	否	会话来源	
        showMessageCard	boolean	false	否	是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话之后会收到一个消息卡片，通过以下三个参数设置卡片的内容	
        sendMessageTitle	string	''	否	会话内消息卡片标题	
        sendMessagePath	string	''	否	会话内消息卡片路径	
        sendMessageImg	string	''	否	会话内消息卡片图片路径
     */
    interface CustomerServiceConversationObj extends callback_success_fail_complete {
        sessionFrom?: string
        showMessageCard?: boolean
        sendMessageTitle?: string
        sendMessagePath?: string
        sendMessageImg?: string
    }

    /**
     * 开放数据域对象
     */
    class OpenDataContext {
        /**
         * 开放数据域和主域共享的 sharedCanvas
         */
        public canvas: Canvas;

        /**
         * 向开放数据域发送消息
         */
        public postMessage(message: Object) { }
    }
}