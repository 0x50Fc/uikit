//图片
namespace wx {
    /**
     * 从本地相册选择图片或使用相机拍照
     */
    export function chooseImage(obj: chooseImageObj) { }

    export function compressImage(obj: compressImageObj) { }
    /**
     * 获取图片信息。网络图片需先配置download域名才能生效
     */
    export function getImageInfo(obj: getImageInfoObj) { }
    /**
     * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。s
     */

    export function previewImage(obj: previewImageObj) { }
    /**
     * 保存图片到系统相册
     */

    export function saveImageToPhotosAlbum(obj:saveImageObj){}
    /**
     * count	number	9	否	最多可以选择的图片张数	
     * sizeType	Array.<string>	['original', 'compressed']	否	所选的图片的尺寸	
     * sourceType	Array.<string>	['album', 'camera']	否	选择图片的来源
     */
    interface chooseImageObj extends wx.callback_success_fail_complete {
        count: number
        sizeType: Array<string>
        sourceType: Array<string>
    }
    /**
     * src	string		是	图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径	
     * quality	number	80	否	压缩质量，范围0～100，数值越小，质量越低，压缩率越高。
     */
    interface compressImageObj extends wx.callback_success_fail_complete {
        src: string
        quality?: number
    }
    /**
     * src	string		是	图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
     */
    interface getImageInfoObj {
        src: string
        success?: (res: getImageInfoSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    /**
     *  width	number	图片原始宽度，单位px。不考虑旋转。	
        height	number	图片原始高度，单位px。不考虑旋转。	
        path	string	图片的本地路径	
        orientation	string	拍照时设备方向	>= 1.9.90
        type	string	图片格式
     */

    interface getImageInfoSuccessObj {
        width: number
        height: number
        path: string
        orientation: string
        type: string
    }
    /**
     * urls	Array.<string>		是	需要预览的图片链接列表。2.2.3 起支持云文件ID。	
     * current	string	urls 的第一张	否	当前显示图片的链接
     */
    interface previewImageObj extends wx.callback_success_fail_complete {
        urls: Array<string>
        current?: string
    }
    /**
     * filePath	string		是	图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
     */
    interface saveImageObj extends wx.callback_success_fail_complete{
        filePath	:string		
    }
}