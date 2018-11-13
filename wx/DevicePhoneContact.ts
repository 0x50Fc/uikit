//设备
//联系人



namespace wx {
    /**
     * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录
     */
    export function addPhoneContact(obj: addPhoneContactObj) { }

    interface addPhoneContactObj extends wx.callback_success_fail_complete {
        firstName: string		//	名字	
        photoFilePath?: string		//	头像本地文件路径	
        nickName?: string		//	昵称	
        lastName?: string		//	姓氏	
        middleName?: string		//	中间名	
        remark?: string		//	备注	
        mobilePhoneNumber?: string		//	手机号	
        weChatNumber?: string		//	微信号	
        addressCountry?: string		//	联系地址国家	
        addressState?: string		//	联系地址省份	
        addressCity?: string		//	联系地址城市	
        addressStreet?: string		//	联系地址街道	
        addressPostalCode?: string		//	联系地址邮政编码	
        organization?: string		//	公司	
        title?: string		//	职位	
        workFaxNumber?: string		//	工作传真	
        workPhoneNumber?: string		//	工作电话	
        hostNumber?: string		//	公司电话	
        email?: string		//	电子邮件	
        url?: string		//	网站	
        workAddressCountry?: string		//	工作地址国家	
        workAddressState?: string		//	工作地址省份	
        workAddressCity?: string		//	工作地址城市	
        workAddressStreet?: string		//	工作地址街道	
        workAddressPostalCode?: string		//	工作地址邮政编码	
        homeFaxNumber?: string		//	住宅传真	
        homePhoneNumber?: string		//	住宅电话	
        homeAddressCountry?: string		//	住宅地址国家	
        homeAddressState?: string		//	住宅地址省份	
        homeAddressCity?: string		//	住宅地址城市	
        homeAddressStreet?: string		//	住宅地址街道	
        homeAddressPostalCode?: string		//	住宅地址邮政编码
    }
}