//文件
namespace wx {

    /**获取全局唯一的文件管理器 */
    export function getFileSystemManager(): FileSystemManager { return; }

    class FileSystemManager {
        /**
         * 判断文件/目录是否存在
         */
        public access(obj: accessObj) { }
        /**
         * FileSystemManager.access 的同步版本
         * @param 要判断是否存在的文件/目录路径
         * 错误:
         * fail no such file or directory ${path}	文件/目录不存在
         */
        public accessSync(path: string) { }

        /**
         * 在文件结尾追加内容
         */
        public appendFile(obj: appendFileObj) { }
        /**
         * FileSystemManager.appendFile 的同步版本
         * @param 参考appendFile
         */
        public appendFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string) { }

        /**
         * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
         */
        public saveFile(obj: saveFileObj) { }
        /**
         * FileSystemManager.saveFile 的同步版本
         * @param 参考
         * @return number savedFilePath 存储后的文件路径
         */

        public saveFileSync(tempFilePath: string, filePath?: string): number { return }

        /**
         * 获取该小程序下已保存的本地缓存文件列表
         */
        public getSavedFileList(obj: savedFileListObj) { }

        /**
         * 删除该小程序下已保存的本地缓存文件
         */
        public removeSavedFile(obj: removeSavedFileObj) { }

        /**
         * 复制文件
         */
        public copyFile(obj: copyFileObj) { }
        /**
         * FileSystemManager.copyFile 的同步版本
         * @param 参考copyFile
         */
        public copyFileSync(srcPath: string, destPath: string) { }

        /**
         * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
         */
        public getFileInfo(obj: fileInfoObj) { }

        /**
         * 创建目录
         */
        public mkdir(obj: mkdirObj) { }
        /**
         * FileSystemManager.mkdir 的同步版本
         * @param 参考
         */
        public mkdirSync(dirPath: string, recursive?: boolean) { }

        /**
         * 读取本地文件内容
         */
        public readFile(obj: readFileObj) { }
        /**
         * FileSystemManager.readFile 的同步版本
         * @param 参考readFile
         */
        public readFileSync(filePath: string, encoding?: string): string | ArrayBuffer { return }

        /**
         * 读取目录内文件列表
         */
        public readdir(obj: readdirObj) { }

        /**
         * FileSystemManager.readdir 的同步版本
         * @param 参考readdir
         */
        public readdirSync(dirPath: string): Array<string> { return }

        /**
         * 重命名文件。可以把文件从 oldPath 移动到 newPath
         */
        public rename(obj: renameObj) { }
        /**
         * FileSystemManager.rename 的同步版本
         * @param 参考rename
         */
        public renameSync(oldPath: string, newPath: string) { }

        /**
         * 删除目录
         */
        public rmdir(obj: rmdirObj) { }
        /**
         * FileSystemManager.rmdir 的同步版本
         * @param 参考rmdir
         */
        public rmdirSync(dirPath: string, recursive?: boolean) { }

        /**
         * 获取文件 Stats 对象
         */
        public stat(obj: statObj) { }
        /**
         * FileSystemManager.stat 的同步版本
         * @param 参考stat
         */
        public statSync(path: string, recursive?: boolean) { }

        /**
         * 删除文件
         */
        public unlink(obj: unlinkObj) { }
        /**
         * FileSystemManager.unlink 的同步版本
         * @param 参考unlink
         */
        public unlinkSync(filePath: string) { }

        /**
         * 解压文件
         */
        public unzip(obj: unzipObj) { }

        /**
         * 写文件
         */
        public writeFile(obj:writeFileObj) { }

        /**
         * FileSystemManager.writeFile 的同步版本
         * @param 参考writeFile
         */
        public writeFileSync(filePath: string,data: string | ArrayBuffer,encoding?: string){}

    }
    /**
     * path	string		是	要判断是否存在的文件/目录路径
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息 取值:（fail no such file or directory ${path}	文件/目录不存在）)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface accessObj extends callback_success_fail_complete {
        path: string
    }
    /**
     * filePath	string		是	要追加内容的文件路径	
     * data	string/ArrayBuffer		是	要追加的文本或二进制数据	
     * encoding	string	utf8	否	指定写入文件的字符编码
     * 取值范围:
     * (ascii	
        base64	
        binary	
        hex	
        ucs2/ucs-2/utf16le/utf-16le	以小端序读取
        utf-8/utf8	
        latin1)

    * success	function		否	接口调用成功的回调函数	
    * fail	function		否	接口调用失败的回调函数	
    * (res.errMsg	string	错误信息 
    取值:
    （  fail no such file or directory, open ${filePath}指定的 filePath 文件不存在
        fail illegal operation on a directory, open "${filePath}"	指定的 filePath 是一个已经存在的目录
        fail permission denied, open ${dirPath}	指定的 filePath 路径没有写权限
        fail sdcard not mounted	指定的 filePath 是一个已经存在的目录）)
    * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface appendFileObj extends callback_success_fail_complete {
        filePath: string
        data: string | ArrayBuffer
        encoding?: string
    }
    /**
     * tempFilePath	string		是	临时存储文件路径	
     * filePath	string		否	要存储的文件路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行
     */
    interface saveFileObj extends callback_success_fail_complete {
        tempFilePath: string
        filePath?: string
    }

    /**
     * filePath	string	本地路径	
     * size	number	本地文件大小，以字节为单位	
     * createTime	number	文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    interface fileListObj {
        filePath?: string
        size?: number
        createTime?: number
    }

    /**
     * fileList	Array.<Object>	文件数组
     */
    interface fileListSuccessRes {
        fileList?: Array<fileListObj>
    }

    interface savedFileListObj {
        success?: (res: fileListSuccessRes) => any
        fail?: (res: failCallbackRes) => any
        complete?: (res: completeCallbackRes) => any
    }

    /**
     * filePath	string		是	需要删除的文件路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * errMsg	string	错误信息
     * (fail file not exist	指定的 tempFilePath 找不到文件)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface removeSavedFileObj extends callback_success_fail_complete {
        filePath: string
    }
    /**
     * srcPath	string		是	源文件路径，只可以是普通文件	
     * destPath	string		是	目标文件路径
     * fail 回调函数 参数 errMsg	string	错误信息
     * 合法值(fail permission denied, copyFile ${srcPath} -> ${destPath}	指定目标文件路径没有写权限
            fail no such file or directory, copyFile ${srcPath} -> ${destPath}	源文件不存在，或目标文件路径的上层目录不存在)
     */
    interface copyFileObj extends callback_success_fail_complete {
        srcPath: string
        destPath: string
    }

    /**
     * filePath	string		是	要读取的文件路径	
     * success	function		否	接口调用成功的回调函数	
     * (size	number	文件大小，以字节为单位)
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息):
     * (fail file not exist	指定的 filePath 找不到文件)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface fileInfoObj extends callback_success_fail_complete {
        filePath: string
    }
    /**
     * dirPath	string		是	创建的目录路径	
     * recursive	boolean	false	否	是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。	>= 2.3.0
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数
     * errMsg:	
     * (fail no such file or directory ${dirPath}	上级目录不存在
     * fail permission denied, open ${dirPath}	指定的 filePath 路径没有写权限
     * fail file already exists ${dirPath}	有同名文件或目录)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */

    interface mkdirObj extends callback_success_fail_complete {
        dirPath: string
        recursive?: boolean
    }
    /**
     * filePath	string		是	要读取的文件的路径	
     * encoding	string		否	指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
     * (ascii	
        base64	
        binary	
        hex	
        ucs2/ucs-2/utf16le/utf-16le	以小端序读取
        utf-8/utf8	
        latin1)
     * success	function		否	接口调用成功的回调函数
     * (data	string/ArrayBuffer	文件内容)	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail no such file or directory, open ${filePath}	指定的 filePath 所在目录不存在
     * fail permission denied, open ${dirPath}	指定的 filePath 路径没有读权限  )
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     * 
     */
    interface readFileObj extends callback_success_fail_complete {
        filePath: string
        encoding?: string
    }
    /**
     * dirPath	string		是	要读取的目录路径	
     * success	function		否	接口调用成功的回调函数	
     * (files	Array.<string>	指定目录下的文件名数组。)
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail no such file or directory ${dirPath}	目录不存在
        fail not a directory ${dirPath}	dirPath 不是目录
        fail permission denied, open ${dirPath}	指定的 filePath 路径没有读权限)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface readdirObj extends callback_success_fail_complete {
        dirPath: string
    }

    /**
     * oldPath	string		是	源文件路径，可以是普通文件或目录	
     * newPath	string		是	新文件路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail permission denied, rename ${oldPath} -> ${newPath}	指定源文件或目标文件没有写权限
        fail no such file or directory, rename ${oldPath} -> ${newPath}	源文件不存在，或目标文件路径的上层目录不存在)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface renameObj extends callback_success_fail_complete {
        oldPath: string
        newPath: string
    }
    /**
     * dirPath	string		是	要删除的目录路径	
     * recursive	boolean	false	否	是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。	>= 2.3.0
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail no such file or directory ${dirPath}	目录不存在
        fail directory not empty	目录不为空
        fail permission denied, open ${dirPath}	指定的 dirPath 路径没有写权限)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface rmdirObj extends callback_success_fail_complete {
        dirPath: string
        recursive?: boolean
    }
    /**
     * path	string		是	文件/目录路径	
     * recursive	boolean	false	否	是否递归获取目录下的每个文件的 Stats 信息	>= 2.3.0
     * success	function		否	接口调用成功的回调函数
     * (stats	Stats/Object	当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。)	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail permission denied, open ${path}	指定的 path 路径没有读权限
        fail no such file or directory ${path}	文件不存在)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface statObj extends callback_success_fail_complete {
        path: string
        recursive?: boolean
    }
    /**
     * filePath	string		是	要删除的文件路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail permission denied, open ${path}	指定的 path 路径没有读权限
        fail no such file or directory ${path}	文件不存在
        fail operation not permitted, unlink ${filePath}	传入的 filePath 是一个目录)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface unlinkObj extends callback_success_fail_complete {
        filePath: string
    }
    /**
     * zipFilePath	string		是	源文件路径，只可以是 zip 压缩文件	
     * targetPath	string		是	目标目录路径	
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail permission denied, unzip ${zipFilePath} -> ${destPath}	指定目标文件路径没有写权限
        fail no such file or directory, unzip ${zipFilePath} -> "${destPath}	源文件不存在，或目标文件路径的上层目录不存在)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行
     */
    interface unzipObj extends callback_success_fail_complete {
        zipFilePath: string
        targetPath: string
    }
    /**
     * filePath	string		是	要写入的文件路径	
     * data	string/ArrayBuffer		是	要写入的文本或二进制数据	
     * encoding	string	utf8	否	指定写入文件的字符编码	
     * (ascii	
        base64	
        binary	
        hex	
        ucs2/ucs-2/utf16le/utf-16le	以小端序读取
        utf-8/utf8	
        latin1)
     * success	function		否	接口调用成功的回调函数	
     * fail	function		否	接口调用失败的回调函数	
     * (errMsg	string	错误信息)
     * (fail no such file or directory, open ${filePath}	指定的 filePath 所在目录不存在
        fail permission denied, open ${dirPath}	指定的 filePath 路径没有写权限)
     * complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）
     */
    interface writeFileObj extends callback_success_fail_complete {
        filePath: string
        data: string | ArrayBuffer
        encoding?: string
    }
}