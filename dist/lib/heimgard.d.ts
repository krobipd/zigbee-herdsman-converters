import * as m from "./modernExtend";
import type { Fz, KeyValueAny, Tz } from "./types";
export declare const SLM_2: {
    sound_volume: (args?: Partial<m.EnumLookupArgs<"closuresDoorLock", undefined>>) => import("./types").ModernExtend;
};
export declare const fzLocal: {
    slm_2_lock: {
        cluster: "closuresDoorLock";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("./types").Definition, msg: Fz.Message<"closuresDoorLock", undefined, ["attributeReport", "readResponse"]>, publish: import("./types").Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
};
export declare const tzLocal: {
    slm_2_sound_volume: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
};
//# sourceMappingURL=heimgard.d.ts.map