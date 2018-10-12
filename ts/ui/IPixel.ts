

namespace kk {

    export namespace ui {

        export const Auto: number = 2147483647;

        export function Copy(target:any,source:any):void {
            for(let key in source){
                target[key] = source[key];
            }
        }

        export function HasSuffix(s:string,suffix:string):boolean {
            if(s.length < suffix.length) {
                return false;
            }
            return s.substr(s.length - suffix.length) == suffix;
        }

        export function HasPrefix(s:string,prefix:string):boolean {
            if(s.length < prefix.length) {
                return false;
            }
            return s.substr(0,prefix.length) == prefix;
        }

        export interface IPixelUnit {
            readonly UnitPX: number;
            readonly UnitRPX: number;
            readonly UnitVW: number;
            readonly UnitVH: number;
        }

        export enum PixelType {
            Auto, Percent, PX, RPX, VW, VH
        }

        export interface IPixel {
            value: number;
            type: PixelType;
        }

        export interface IEdge {
            top: IPixel;
            right: IPixel;
            bottom: IPixel;
            left: IPixel;
        }

        export enum VerticalAlign {
            Top, Middle, Bottom
        }

        export enum TextAlign {
            Left, Center, Right
        }

        export enum Position {
            None, Top, Bottom, Left, Right
        }

        export enum TextDecoration {
            None, Underline, LineThrough
        }

        export function parseVerticalAlign(value: string | number | undefined): VerticalAlign {
            switch (typeof value) {
                case "string":
                    switch (value) {
                        case "middle":
                            return VerticalAlign.Middle;
                        case "bottom":
                            return VerticalAlign.Bottom;
                    }
                    break;
                case "number":
                    return value;
            }
            return VerticalAlign.Top;
        }

        export function parsePosition(value: string | number | undefined): Position {
            switch (typeof value) {
                case "string":
                    switch (value) {
                        case "top":
                            return Position.Top;
                        case "bottom":
                            return Position.Bottom;
                        case "left":
                            return Position.Left;
                        case "right":
                            return Position.Right;
                    }
                    break;
                case "number":
                    return value;
            }
            return Position.None;
        }

        export function parsePixel(value: string | number | undefined): IPixel {
 
            switch (typeof value) {
                case "string":
                    if (value == "auto") {
                        return { value: 0, type: PixelType.Auto };
                    }
                    if (HasSuffix(value,"%")) {
                        return { value: parseFloat(value), type: PixelType.Percent };
                    }
                    if (HasSuffix(value,"rpx")) {
                        return { value: parseFloat(value), type: PixelType.RPX };
                    }
                    if (HasSuffix(value,"px")) {
                        return { value: parseFloat(value), type: PixelType.PX };
                    }
                    if (HasSuffix(value,"vh")) {
                        return { value: parseFloat(value), type: PixelType.VH };
                    }
                    if (HasSuffix(value,"vw")) {
                        return { value: parseFloat(value), type: PixelType.VW };
                    }
                    break;
                case "number":
                    return { value: value, type: PixelType.RPX };
            }

            return { value: 0, type: PixelType.Auto };
        }

        export function parseEdge(value: string | undefined): IEdge {

            var v: IEdge = { top: { value: 0, type: PixelType.Auto }, right: { value: 0, type: PixelType.Auto }, bottom: { value: 0, type: PixelType.Auto }, left: { value: 0, type: PixelType.Auto } };

            if (typeof value == 'string') {

                var vs = value.split(" ");

                if (vs.length > 0) {
                    v.top = parsePixel(vs[0]);
                    if (vs.length > 1) {
                        v.right = parsePixel(vs[1]);
                        if (vs.length > 2) {
                            v.bottom = parsePixel(vs[2]);
                            if (vs.length > 3) {
                                v.left = parsePixel(vs[3]);
                            } else {
                                Copy(v.left, v.right);
                            }
                        } else {
                            Copy(v.left, v.right);
                            Copy(v.bottom, v.top);
                        }
                    } else {
                        Copy(v.left, v.top);
                        Copy(v.right, v.top);
                        Copy(v.bottom, v.top);
                    }
                }
            }

            return v;
        }

        export function pixel(p: IPixel, unit: IPixelUnit, baseOf: number, defaultValue: number): number {

            switch (p.type) {
                case PixelType.Percent:
                    return p.value * baseOf * 0.01;
                case PixelType.PX:
                    return p.value * unit.UnitPX;
                case PixelType.RPX:
                    return p.value * unit.UnitRPX;
                case PixelType.VH:
                    return p.value * unit.UnitVH;
                case PixelType.VW:
                    return p.value * unit.UnitVW;
            }

            return defaultValue;
        }

        export function booleanValue(value: any, defalutValue: boolean): boolean {
            switch (typeof value) {
                case "object":
                    return true;
                case "function":
                    return true;
                case "string":
                    return value == "true";
                case "number":
                    return value != 0;
                case "boolean":
                    return value;
            }
            return defalutValue;
        }
    }

}
