//虚拟支付

namespace wx {

    /**
     * 发起米大师支付
     */
    export function requestMidasPayment(obj:requestMidasPaymentObj) { }

    /**
     *  mode	string		是	支付的类型，不同的支付类型有各自额外要传的附加参数。
     * 合法值:
     * (game	购买游戏币)	
        env	number	0	否	环境配置
        合法值:
        (   0	米大师正式环境
            1	米大师沙箱环境)	
        offerId	string		是	在米大师侧申请的应用 id	
        currencyType	string		是	币种
        (CNY	人民币)	
        platform	string		否	申请接入时的平台，platform 与应用id有关。
        (android	android)	
        buyQuantity	number		否	购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。
        购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。
        如：游戏币单价为 0.1 元，一次购买最少数量是 10。
        (   1
            3
            6
            8
            12
            18
            25
            30
            40
            45
            50
            60
            68
            73
            78
            88
            98
            108
            118
            128
            148
            168
            188
            198
            328
            648)	
        zoneId	string	1	否	分区 ID
     */
    interface requestMidasPaymentObj extends callback_success_fail_complete {
        mode: string
        offerId: string
        currencyType: string
        env?: number
        platform?: string
        buyQuantity?: number
        zoneId?: string
    }
}