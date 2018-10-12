

namespace kk {

    export namespace ui {

        export interface IColor {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a: number;
        }


        export function parseColor(value: string | undefined): IColor {

            var v = { r: 0, g: 0, b: 0, a: 0 };

            if(typeof value == 'string') {
                if(HasPrefix(value,"#")) {
                    if(value.length == 9) {
                        v.a = parseInt(value.substr(1,2),16) / 255.0;
                        v.r = parseInt(value.substr(3,2),16) / 255.0;
                        v.g = parseInt(value.substr(5,2),16) / 255.0;
                        v.b = parseInt(value.substr(7,2),16) / 255.0;
                    } else if(value.length == 7) {
                        v.r = parseInt(value.substr(1,2),16) / 255.0;
                        v.g = parseInt(value.substr(3,2),16) / 255.0;
                        v.b = parseInt(value.substr(5,2),16) / 255.0;
                        v.a = 1;
                    } else if(value.length == 4) {
                        v.r = parseInt(value.substr(1,1),16);
                        v.g = parseInt(value.substr(2,1),16);
                        v.b = parseInt(value.substr(3,1),16);
                        v.a = 1;
                        v.r = (v.r << 4 | v.r) / 255.0;
                        v.g = (v.g << 4 | v.g) / 255.0;
                        v.b = (v.b << 4 | v.b) / 255.0;
                    }
                }
            }

            return v;
        }
    }
}