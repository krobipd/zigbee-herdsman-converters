import type { DefinitionWithExtend, Fz, KeyValue, Tz } from "../lib/types";
export declare const tzLocal: {
    easycode_auto_relock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                auto_relock: unknown;
            };
        }>;
    };
};
export declare const fzLocal: {
    nimly_pro_lock_actions: {
        cluster: "closuresDoorLock";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"closuresDoorLock", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    easycodetouch_action: {
        cluster: "closuresDoorLock";
        type: "raw";
        convert: (model: import("..").Definition, msg: Fz.Message<"closuresDoorLock", undefined, "raw">, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=onesti.d.ts.map