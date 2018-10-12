

namespace kk {

    export interface IEventEmitter {
        on(name: string, func: (event: IEvent) => void): void;
        off(name?: string, func?: (event: IEvent) => void): void;
        emit(name: string, event: IEvent): void;
        has(name: string): boolean;
    }

}



