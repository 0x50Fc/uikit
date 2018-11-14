//地图

namespace wx {
    /**创建 map 上下文 MapContext 对象 */
    export function createMapContext(mapId: string, thisObj: any): MapContext {
        return
    }

    class MapContext {
        /**
         * 获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
         */
        public getCenterLocation(obj: LocationSuccessObj) { }

        /**将地图中心移动到当前定位点。需要配合map组件的show-location使用 */
        public moveToLocation() { }
        /**平移marker，带动画 */

        public translateMarker(Object object) { }
        /**缩放视野展示所有经纬度 */

        public includePoints(obj: PointsObj) { }

        /**获取当前地图的视野范围 */
        public getRegion(obj: RegionObj) { }

        /**获取当前地图的缩放级别 */
        public getScale(obj: ScaleObj) { }

    }

    interface LocationSuccessObj {
        latitude: string	//纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系	
        longitude: string	//经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
    }
    interface LocationObj {
        success?: (res: LocationSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface RegionSuccessObj {
        southwest: number//	西南角经纬度	
        northeast: number
    }
    interface RegionObj {
        success?: (res: RegionSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }
    interface ScaleSuccessObj {
        scale: number
    }
    interface ScaleObj {
        success?: (res: ScaleSuccessObj) => any
        fail?: (res: wx.failCallbackRes) => any
        complete?: (res: wx.completeCallbackRes) => any
    }

    interface PointsObj extends wx.callback_success_fail_complete {
        points: Array<LocationSuccessObj>	//	是	要显示在可视区域内的坐标点列表	
        padding?: Array<number>		//否	坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
    }

    interface translateMarkerObj extends wx.callback_success_fail_complete {
        markerId: number		//	指定 marker	
        destination: LocationSuccessObj		//	指定 marker 移动到的目标点	
        autoRotate: boolean		//	移动过程中是否自动旋转 marker	
        rotate: number		//	marker 的旋转角度	
        duration?: number		//1000	动画持续时长，平移与旋转分别计算	
        animationEnd?: Function		//	动画结束回调函数
    }
}