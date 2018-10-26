
//媒体
//图片

namespace wx {


    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    export function chooseImage(obj: chooseImageObj) { }

    /**
     * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
     */
    export function previewImage(obj: previewImageObj) { }

    /**
     * 保存图片到系统相册。
     */

    export function saveImageToPhotosAlbum(obj:saveImageObj) { }


    /**
     *  属性	类型	说明	支持版本
     * tempFilePaths	Array.<string>	图片的本地临时文件路径列表	
     * tempFiles	Array.<Object>	图片的本地临时文件列表	>= 1.2.0
     * (path	string	本地临时文件路径	
        size	number	本地临时文件大小，单位 B)
     */

    interface chooseImageSuccessObj {
        tempFilePaths: Array<string>
        tempFiles: Array<Object>
    }


    /**
     * count	number	9	否	最多可以选择的图片张数	
     * sizeType	Array.<string>	['original', 'compressed']	否	所选的图片的尺寸
        (original	原图
        compressed	压缩图)	
     *sourceType	Array.<string>	['album', 'camera']	否	选择图片的来源	
        ( album	从相册选图
          camera	使用相机)
     *success	function		否	接口调用成功的回调函数	
     *fail	function		否	接口调用失败的回调函数	
     *complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface chooseImageObj {
        count?: number
        sizeType?: Array<string>
        sourceType?: Array<string>
        success?: (res: chooseImageSuccessObj) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }


    interface previewImageObj extends callback_success_fail_complete {
        urls: Array<string>
        current?: string
    }

    /**
     * filePath	string		是	图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface saveImageObj extends callback_success_fail_complete {
        filePath: string
    }
}