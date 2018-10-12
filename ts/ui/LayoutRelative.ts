
namespace kk {

    export namespace ui {

        export function LayoutRelative(element: ILayoutElement, unit: IPixelUnit): ISize {

            let size = element.frame.size;
            let padding = element.padding;
            let paddingLeft = pixel(padding.left, unit, size.width, 0);
            let paddingRight = pixel(padding.right, unit, size.width, 0);
            let paddingTop = pixel(padding.top, unit, size.height, 0);
            let paddingBottom = pixel(padding.bottom, unit, size.height, 0);
            let inSize = { width: size.width - paddingLeft - paddingRight, height: size.height - paddingTop - paddingBottom };
            var contentSize: ISize = { width: 0, height: 0 };

            var p = element.firstChild;

            while (p) {

                if (p instanceof LayoutElement) {

                    let e = p as LayoutElement;
                    let margin = e.margin;
                    let mleft = pixel(margin.left, unit, size.width, 0);
                    let mright = pixel(margin.right, unit, size.width, 0);
                    let mtop = pixel(margin.top, unit, size.height, 0);
                    let mbottom = pixel(margin.bottom, unit, size.height, 0);

                    var width = pixel(e.width, unit, inSize.width - mleft - mright, Auto);
                    var height = pixel(e.height, unit, inSize.height - mtop - mbottom, Auto);

                    var v = e.frame;

                    v.size.width = width;
                    v.size.height = height;

                    e.layoutChildren(unit);

                    if (width == Auto) {
                        width = v.size.width = e.contentSize.width;
                        let min = pixel(e.minWidth, unit, inSize.width, 0);
                        let max = pixel(e.maxWidth, unit, inSize.width, Auto);
                        if (v.size.width < min) {
                            width = v.size.width = min;
                        }
                        if (v.size.width > max) {
                            width = v.size.width = max;
                        }
                    }

                    if (height == Auto) {
                        height = v.size.height = e.contentSize.height;
                        let min = pixel(e.minHeight, unit, inSize.height, 0);
                        let max = pixel(e.maxHeight, unit, inSize.height, Auto);
                        if (v.size.height < min) {
                            height = v.size.height = min;
                        }
                        if (v.size.height > max) {
                            height = v.size.height = max;
                        }
                    }

                    let left = pixel(e.left, unit, inSize.width, Auto);
                    let right = pixel(e.right, unit, inSize.width, Auto);
                    let top = pixel(e.top, unit, inSize.height, Auto);
                    let bottom = pixel(e.bottom, unit, inSize.height, Auto);

                    if(left == Auto) {

                        if(size.width == Auto) {
                            left = paddingLeft + mleft;
                        } else if(right == Auto) {
                            left = paddingLeft + mleft + (inSize.width - width - mleft - mright) * 0.5;
                        } else {
                            left = paddingLeft + (inSize.width - right - mright - width);
                        }
                    } else {
                        left = paddingLeft + left + mleft;
                    }

                    if(top == Auto) {

                        if(size.height == Auto) {
                            top = paddingTop + mtop;
                        } else if(bottom == Auto) {
                            top = paddingTop + mtop + (inSize.height - height - mtop - mbottom) * 0.5;
                        } else {
                            top = paddingTop + (inSize.height - height - mbottom - bottom);
                        }
                    } else {
                        top = paddingTop + top + mtop;
                    }

                    v.origin.x = left;
                    v.origin.y = top;
                    
                    if(left + paddingRight + mright + v.size.width > contentSize.width) {
                        contentSize.width = left + paddingRight + mright + v.size.width;
                    }

                    if(top + paddingBottom + mbottom  + v.size.height > contentSize.height) {
                        contentSize.height = top + paddingBottom + mbottom + v.size.height ;
                    }

                    e.didLayouted();
                }

                p = p.nextSibling;
            }

            return contentSize;
        };
    }

}