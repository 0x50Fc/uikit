

namespace wx {

    /**创建并返回一个 IntersectionObserver 对象实例。在自定义组件中，可以使用 this.createIntersectionObserver([options]) 来代替。 */
    export function createIntersectionObserver(thisObj: any, options: observerObj): IntersectionObserver { return }
    /**返回一个 SelectorQuery 对象实例。 */
    export function createSelectorQuery(): SelectorQuery { return }


    interface observerObj {
        thresholds: Array<number>	//[0]	否	一个数值数组，包含所有阈值。	
        initialRatio: number//	0	否	初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。	
        observeAll: boolean	//false	否	是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
    }

    class IntersectionObserver {
        /**使用选择器指定一个节点，作为参照区域之一。 */
        public relativeTo(selector: string, margins: RectObj) { }

        /**指定页面显示区域作为参照区域之一 */
        public relativeToViewport(margins: RectObj) { }

        /**指定目标节点并开始监听相交状态变化情况 */
        public observe(targetSelector: string, callback: (res: IntersectionObserveObj) => any) { }

        /**停止监听。回调函数将不再触发 */
        public disconnect() { }
    }

    interface IntersectionObserveObj {
        intersectionRatio: number	//相交比例	
        intersectionRect: RectObj	//相交区域的边界	
        boundingClientRect: RectObj	//目标边界	
        relativeRect: RectObj	//参照区域的边界	
        time: number	//相交检测时的时间戳
    }

    interface RectObj {
        left: number	//左边界	
        right: number	//右边界	
        top: number	//上边界	
        bottom: number	//下边界
    }


    class SelectorQuery {
        /**
         * 将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，
         * 不会选取任何自定义组件中的节点）。
         */
        public in(component: Component): SelectorQuery { return }
        /**
         * 在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息。
         */
        public select(selector: string): NodesRef { return }
        /**
         * 在当前页面下选择匹配选择器 selector 的所有节点。
         */
        public selectAll() { }

        /**
         * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。
         */
        public selectViewport(): NodesRef { return }

        /**
         * 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
         */
        public exec(callback?: Function): NodesRef { return }

    }

    class NodesRef {
        /**获取节点的相关信息。需要获取的字段在fields中指定。返回值是 nodesRef 对应的 selectorQuery */
        public fields(fields: fieldsObj) { }

        /**
         * 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的
         *  getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。
         */
        public boundingClientRect(callback: (res: boundingObj) => any): SelectorQuery { return }
        /**
         * 添加节点的滚动位置查询请求。以像素为单位。节点必须是 scroll-view 或者 viewport，返回 NodesRef 对应的 SelectorQuery。
         */
        public scrollOffset(callback: (res: scrollObj) => any): SelectorQuery { return }

    }
    interface Component { }

    interface fieldsObj {
        id: boolean//	false	否	是否返回节点 id	
        dataset: boolean	//false	否	是否返回节点 dataset	
        rect: boolean	//false	否	是否返回节点布局位置（left right top bottom）	
        size: boolean	//false	否	是否返回节点尺寸（width height）	
        scrollOffset: boolean//	false	否	否 是否返回节点的 scrollLeft scrollTop，节点必须是 scroll-view 或者 viewport	
        properties: Array<string>	//[]	否	指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取）	
        computedStyle: Array<string>//	[]	否	指定样式名列表，返回节点对应样式名的当前值
    }

    interface boundingObj {
        id: string//	节点的 ID	
        dataset: Object | any //节点的 dataset	
        left: number	//节点的左边界坐标	
        right: number	//节点的右边界坐标	
        top: number//	节点的上边界坐标	
        bottom: number	//节点的下边界坐标	
        width: number	//节点的宽度	
        height: number	//节点的高度
    }
    interface scrollObj {
        id: string	//节点的 ID	
        dataset: Object | any	//节点的 dataset	
        scrollLeft: number	//节点的水平滚动位置	
        scrollTop: number	//节点的竖直滚动位置
    }
}