"use strict";
var kk;
(function (kk) {
    let ui;
    (function (ui) {
        ui.Auto = 2147483647;
        function Copy(target, source) {
            for (let key in source) {
                target[key] = source[key];
            }
        }
        ui.Copy = Copy;
        function HasSuffix(s, suffix) {
            if (s.length < suffix.length) {
                return false;
            }
            return s.substr(s.length - suffix.length) == suffix;
        }
        ui.HasSuffix = HasSuffix;
        function HasPrefix(s, prefix) {
            if (s.length < prefix.length) {
                return false;
            }
            return s.substr(0, prefix.length) == prefix;
        }
        ui.HasPrefix = HasPrefix;
        let PixelType;
        (function (PixelType) {
            PixelType[PixelType["Auto"] = 0] = "Auto";
            PixelType[PixelType["Percent"] = 1] = "Percent";
            PixelType[PixelType["PX"] = 2] = "PX";
            PixelType[PixelType["RPX"] = 3] = "RPX";
            PixelType[PixelType["VW"] = 4] = "VW";
            PixelType[PixelType["VH"] = 5] = "VH";
        })(PixelType = ui.PixelType || (ui.PixelType = {}));
        let VerticalAlign;
        (function (VerticalAlign) {
            VerticalAlign[VerticalAlign["Top"] = 0] = "Top";
            VerticalAlign[VerticalAlign["Middle"] = 1] = "Middle";
            VerticalAlign[VerticalAlign["Bottom"] = 2] = "Bottom";
        })(VerticalAlign = ui.VerticalAlign || (ui.VerticalAlign = {}));
        let TextAlign;
        (function (TextAlign) {
            TextAlign[TextAlign["Left"] = 0] = "Left";
            TextAlign[TextAlign["Center"] = 1] = "Center";
            TextAlign[TextAlign["Right"] = 2] = "Right";
        })(TextAlign = ui.TextAlign || (ui.TextAlign = {}));
        let Position;
        (function (Position) {
            Position[Position["None"] = 0] = "None";
            Position[Position["Top"] = 1] = "Top";
            Position[Position["Bottom"] = 2] = "Bottom";
            Position[Position["Left"] = 3] = "Left";
            Position[Position["Right"] = 4] = "Right";
        })(Position = ui.Position || (ui.Position = {}));
        let TextDecoration;
        (function (TextDecoration) {
            TextDecoration[TextDecoration["None"] = 0] = "None";
            TextDecoration[TextDecoration["Underline"] = 1] = "Underline";
            TextDecoration[TextDecoration["LineThrough"] = 2] = "LineThrough";
        })(TextDecoration = ui.TextDecoration || (ui.TextDecoration = {}));
        function parseVerticalAlign(value) {
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
        ui.parseVerticalAlign = parseVerticalAlign;
        function parsePosition(value) {
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
        ui.parsePosition = parsePosition;
        function parsePixel(value) {
            switch (typeof value) {
                case "string":
                    if (value == "auto") {
                        return { value: 0, type: PixelType.Auto };
                    }
                    if (HasSuffix(value, "%")) {
                        return { value: parseFloat(value), type: PixelType.Percent };
                    }
                    if (HasSuffix(value, "rpx")) {
                        return { value: parseFloat(value), type: PixelType.RPX };
                    }
                    if (HasSuffix(value, "px")) {
                        return { value: parseFloat(value), type: PixelType.PX };
                    }
                    if (HasSuffix(value, "vh")) {
                        return { value: parseFloat(value), type: PixelType.VH };
                    }
                    if (HasSuffix(value, "vw")) {
                        return { value: parseFloat(value), type: PixelType.VW };
                    }
                    break;
                case "number":
                    return { value: value, type: PixelType.RPX };
            }
            return { value: 0, type: PixelType.Auto };
        }
        ui.parsePixel = parsePixel;
        function parseEdge(value) {
            var v = { top: { value: 0, type: PixelType.Auto }, right: { value: 0, type: PixelType.Auto }, bottom: { value: 0, type: PixelType.Auto }, left: { value: 0, type: PixelType.Auto } };
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
                            }
                            else {
                                Copy(v.left, v.right);
                            }
                        }
                        else {
                            Copy(v.left, v.right);
                            Copy(v.bottom, v.top);
                        }
                    }
                    else {
                        Copy(v.left, v.top);
                        Copy(v.right, v.top);
                        Copy(v.bottom, v.top);
                    }
                }
            }
            return v;
        }
        ui.parseEdge = parseEdge;
        function pixel(p, unit, baseOf, defaultValue) {
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
        ui.pixel = pixel;
        function booleanValue(value, defalutValue) {
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
        ui.booleanValue = booleanValue;
    })(ui = kk.ui || (kk.ui = {}));
})(kk || (kk = {}));
//# sourceMappingURL=IPixel.js.map