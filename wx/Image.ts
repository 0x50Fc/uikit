//图片
namespace wx {
    export function createImage(): Image { 
        return; }

    class Image {
        /**
         * 图片的 URL
         */

        src: string

        /**
         * 图片的真实宽度
         */
        width: number

        /**
         * 图片的真实高度
         */
        height: number

        /**
         * 图片加载完成后触发的回调函数
         */
        onload: Function;

        /**
         * 图片加载发生错误后触发的回调函数
         */
        onerror: Function;
    }
}


