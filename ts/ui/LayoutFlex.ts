
namespace kk {

    export namespace ui {

        function layoutLineElements(elements: LayoutElement[], inSize: ISize, lineHeight: number, unit: IPixelUnit): void {

            for (var element of elements) {

                switch (element.verticalAlign) {
                    case VerticalAlign.Bottom:
                        {
                            var r = element.frame;
                            let mbottom = pixel(element.margin.bottom, unit, inSize.height, 0);
                            let mtop = pixel(element.margin.top, unit, inSize.height, 0);
                            r.origin.y = r.origin.y + (lineHeight - mtop - mbottom - r.size.height);
                        }
                        break;
                    case VerticalAlign.Middle:
                        {
                            var r = element.frame;
                            let mbottom = pixel(element.margin.bottom, unit, inSize.height, 0);
                            let mtop = pixel(element.margin.top, unit, inSize.height, 0);
                            r.origin.y = r.origin.y + (lineHeight - mtop - mbottom - r.size.height) * 0.5;
                        }
                        break;
                }

                element.didLayouted();
            }
        }


        export function LayoutFlex(element: ILayoutElement, unit: IPixelUnit, autoWarp = true): ISize {

            let size = element.frame.size;
            let padding = element.padding;
            let paddingLeft = pixel(padding.left, unit, size.width, 0);
            let paddingRight = pixel(padding.right, unit, size.width, 0);
            let paddingTop = pixel(padding.top, unit, size.height, 0);
            let paddingBottom = pixel(padding.bottom, unit, size.height, 0);
            let inSize = { width: size.width - paddingLeft - paddingRight, height: size.height - paddingTop - paddingBottom };

            var y = paddingTop;
            var x = paddingLeft;
            var maxWidth = paddingLeft + paddingRight;
            var lineHeight = 0;

            var p = element.firstChild;
            var lineElements: LayoutElement[] = [];

            while (p) {

                if (p instanceof LayoutElement) {

                    if (p.hidden) {
                        p = p.nextSibling;
                        continue;
                    }

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

                    if (autoWarp && x + mleft + mright + paddingRight + v.size.width > size.width) {
                        if (lineElements.length > 0) {
                            layoutLineElements(lineElements, inSize, lineHeight, unit);
                            lineElements = [];
                        }
                        y += lineHeight;
                        lineHeight = 0;
                        x = paddingLeft;
                    }

                    let left = x + mleft;
                    let top = y + mtop;

                    x += width + mleft + mright;

                    if (lineHeight < height + mtop + mbottom) {
                        lineHeight = height + mtop + mbottom;
                    }

                    v.origin.x = left;
                    v.origin.y = top;

                    if (left + paddingRight + mright > maxWidth) {
                        maxWidth = left + paddingRight + mright;
                    }

                    lineElements.push(e);
                }

                p = p.nextSibling;
            }

            if (lineElements.length > 0) {
                layoutLineElements(lineElements, inSize, lineHeight, unit);
            }

            return { width: maxWidth, height: y + lineHeight + paddingBottom };
        };

        export function LayoutHorizontal(element: ILayoutElement, unit: IPixelUnit): ISize {
            return LayoutFlex(element, unit, false);
        }
    }

}