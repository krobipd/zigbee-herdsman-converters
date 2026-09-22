import type { DefinitionWithExtend, Fz, KeyValue } from "../lib/types";
export declare const fzLocal: {
    orvibo_raw_1: {
        cluster: 23;
        type: "raw";
        convert: (model: import("..").Definition, msg: Fz.Message<23, undefined, "raw">, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    orvibo_raw_2: {
        cluster: 23;
        type: "raw";
        convert: (model: import("..").Definition, msg: Fz.Message<23, undefined, "raw">, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
};
export interface OrviboSwitchRewiringArgs {
    endpointNames: string[];
    endpoints: {
        [n: string]: number;
    };
    endpointIds: {
        [n: number]: string;
    };
}
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=orvibo.d.ts.map