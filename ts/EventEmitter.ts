
namespace kk {

    export class EventEmitter implements IEventEmitter {

        private _events: any = {};

        public on(name: string, func: (event: IEvent) => void): void {
            var v = this._events[name];
            if (v === undefined) {
                v = [];
                this._events[name] = v;
            }
            v.push(func);
        }

        public off(name?: string, func?: (event: IEvent) => void): void {
            if (name === undefined && func === undefined) {
                this._events = {};
            } else if (func === undefined && name !== undefined) {
                delete this._events[name];
            } else if(name !== undefined){
                var v = this._events[name];
                if (v !== undefined) {
                    var vs = [];
                    for(let fn of v) {
                        if (fn != func) {
                            vs.push(fn);
                        }
                    }
                    this._events[name] = vs;
                }
            }
        }

        public emit(name: string, event: IEvent): void {
            var v = this._events[name];
            if(v !== undefined) {
                var vs = v.slice();
                for(let fn of vs) {
                    fn(event);
                }
            }
        }

        public has(name: string): boolean {
            return this._events[name] !== undefined;
        }


    }

}