import type { Definition, DefinitionWithExtend, Fz, KeyValue } from "../lib/types";
interface ThirdAcceleration {
    attributes: {
        coolDownTime: number;
        xAxis: number;
        yAxis: number;
        zAxis: number;
        xAngle: number;
        yAngle: number;
        zAngle: number;
    };
    commands: never;
    commandResponses: never;
}
interface ThirdMotionSensor {
    attributes: {
        coldDownTime: number;
        localRoutinTime: number;
        luxThreshold: number;
    };
    commands: never;
    commandResponses: never;
}
interface ThirdScaleSensor {
    attributes: {
        readWeight: number;
        attr2: number;
        attr3: number;
        attr4: number;
        attr5: number;
    };
    commands: never;
    commandResponses: never;
}
export declare const fzLocal: {
    thirdreality_acceleration: {
        cluster: "3rVirationSpecialcluster";
        type: ["attributeReport", "readResponse"];
        convert: (model: Definition, msg: Fz.Message<"3rVirationSpecialcluster", ThirdAcceleration, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    thirdreality_private_motion_sensor: {
        cluster: "r3Specialcluster";
        type: "attributeReport";
        convert: (model: Definition, msg: Fz.Message<"r3Specialcluster", ThirdMotionSensor, "attributeReport">, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            occupancy: boolean;
        };
    };
    itcmdr_clicks: {
        cluster: "genMultistateInput";
        type: ["readResponse", "attributeReport"];
        convert: (model: Definition, msg: Fz.Message<"genMultistateInput", undefined, ["readResponse", "attributeReport"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: any;
        };
    };
    scale_weight: {
        cluster: "3rScaleSensorcluster";
        type: ["attributeReport", "readResponse"];
        convert: (model: Definition, msg: Fz.Message<"3rScaleSensorcluster", ThirdScaleSensor, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            weight: number;
            weight_pound_ounce: string;
        } | {
            weight?: undefined;
            weight_pound_ounce?: undefined;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
export {};
//# sourceMappingURL=third_reality.d.ts.map