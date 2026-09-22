import type { DefinitionWithExtend, Fz, Tz } from "../lib/types";
export declare const tzLocal: {
    tint_scene: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
};
export declare const fzLocal: {
    tint404011_move_to_color_temp: {
        cluster: "lightingColorCtrl";
        type: "commandMoveToColorTemp";
        convert: (model: import("..").Definition, msg: Fz.Message<"lightingColorCtrl", undefined, "commandMoveToColorTemp">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
            action_color_temperature: number;
            action_transition_time: number;
            action_color_temperature_direction: string;
        };
    };
    tint_scene: {
        cluster: "genBasic";
        type: "write";
        convert: (model: import("..").Definition, msg: Fz.Message<"genBasic", undefined, "write">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=muller_licht.d.ts.map