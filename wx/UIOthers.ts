//界面
//自定义组件
//下拉刷新
//滚动
//置顶
namespace wx {

    /**延迟一部分操作到下一个时间片再执行。（类似于 setTimeout） */
    export function nextTick(callback?: Function) { }
    /**开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致 */
    export function startPullDownRefresh(obj?: wx.callback_success_fail_complete) { }
    /**停止当前页面下拉刷新 */
    export function stopPullDownRefresh(obj?: wx.callback_success_fail_complete) { }
    /**将页面滚动到目标位置 */
    export function pageScrollTo(obj: pageScrollToObj) { }
    /** 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶
     * 也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内*/
    export function setTopBarText() { }

    interface pageScrollToObj extends wx.callback_success_fail_complete {
        scrollTop: number	//	是	滚动到页面的目标位置，单位 px	
        duration?: number	//300	否	滚动动画的时长，单位 ms
    }
    interface topBarTextObj extends wx.callback_success_fail_complete {
        text: string|any		//是	置顶栏文字
    }

}