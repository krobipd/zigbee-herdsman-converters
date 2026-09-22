import type { DefinitionWithExtend, Fz } from "../lib/types";
export declare const fzLocal: {
    U02I007C01_contact: {
        cluster: "ssIasZone";
        type: "commandStatusChangeNotification";
        convert: (model: import("..").Definition, msg: Fz.Message<"ssIasZone", undefined, "commandStatusChangeNotification">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            contact: boolean;
        };
    };
    U02I007C01_water_leak: {
        cluster: "ssIasZone";
        type: "commandStatusChangeNotification";
        convert: (model: import("..").Definition, msg: Fz.Message<"ssIasZone", undefined, "commandStatusChangeNotification">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            water_leak: boolean;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=wally.d.ts.map