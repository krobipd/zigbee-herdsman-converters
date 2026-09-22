import type { DefinitionWithExtend, Fz } from "../lib/types";
export declare const fzLocal: {
    awox_color_ctrl: {
        cluster: "lightingColorCtrl";
        type: ["raw", "commandEnhancedMoveHue", "commandStepColorTemp"];
        convert: (model: import("..").Definition, msg: Fz.Message<"lightingColorCtrl", undefined, ["raw", "commandEnhancedMoveHue", "commandStepColorTemp"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    awox_level_ctrl: {
        cluster: "genLevelCtrl";
        type: ["raw"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genLevelCtrl", undefined, ["raw"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    awox_scenes_raw: {
        cluster: "genScenes";
        type: ["raw"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genScenes", undefined, ["raw"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    awox_colors: {
        cluster: "lightingColorCtrl";
        type: ["raw"];
        convert: (model: import("..").Definition, msg: Fz.Message<"lightingColorCtrl", undefined, ["raw"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
            action_group: number;
        };
    };
    awox_refreshColored: {
        cluster: "lightingColorCtrl";
        type: ["commandMoveHue"];
        convert: (model: import("..").Definition, msg: Fz.Message<"lightingColorCtrl", undefined, ["commandMoveHue"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
            action_group: number;
        };
    };
    awox_refresh: {
        cluster: "genLevelCtrl";
        type: ["raw"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genLevelCtrl", undefined, ["raw"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
            action_group: number;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=awox.d.ts.map