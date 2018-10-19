//视频
namespace wx{

    /**
     * 保存视频到系统相册
     */
    export function saveVideoToPhotosAlbum(param:saveVideoToPhotosAlbumParam){
    }
}
/**
 * filePath	string		是	视频文件路径，可以是临时文件路径也可以是永久文件路径
 */
interface saveVideoToPhotosAlbumParam extends callback_success_fail_complete{
    filePath:string
}