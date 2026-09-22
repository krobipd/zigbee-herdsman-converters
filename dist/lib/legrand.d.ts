import { Zcl } from "zigbee-herdsman";
import type { DummyDevice, Fz, KeyValueAny, OnEvent, Tz, Zh } from "../lib/types";
import * as exposes from "./exposes";
import type { TuyaClosuresWindowCovering } from "./tuya";
export declare const legrandOptions: {
    manufacturerCode: Zcl.ManufacturerCode;
    disableDefaultResponse: boolean;
};
export interface LegrandDevicesCluster {
    attributes: {
        deviceMode: number;
        ledInDark: number;
        ledIfOn: number;
    };
    commands: never;
    commandResponses: never;
}
interface LegrandDevicesCluster2 {
    attributes: {
        pilotWireMode: number;
    };
    commands: {
        command0: {
            data: Buffer;
        };
    };
    commandResponses: never;
}
interface LegrandClosuresWindowCovering {
    attributes: {
        stepPositionLift?: number;
        calibrationMode?: number;
        targetPositionTiltPercentage?: number;
        stepPositionTilt?: number;
    };
    commands: never;
    commandResponses: never;
}
export interface LegrandHaElectricalMeasurement {
    attributes: {
        powerAlarmEnabled: boolean;
        powerAlarmWhThreshold: number;
    };
    commands: never;
    commandResponses: never;
}
export declare const legrandExtend: {
    addLegrandDevicesCluster: () => import("../lib/types").ModernExtend;
    addLegrandDevices2Cluster: () => import("../lib/types").ModernExtend;
    addLegrandDevices3Cluster: () => import("../lib/types").ModernExtend;
    addLegrandClosuresWindowCovering: () => import("../lib/types").ModernExtend;
    addLegrandHaElectricalMeasurement: () => import("../lib/types").ModernExtend;
};
export declare const eLegrand: {
    identify: () => exposes.Enum;
    ledInDark: () => exposes.Binary;
    ledIfOn: () => exposes.Binary;
    getCover: (device: Zh.Device | DummyDevice) => exposes.Cover;
    getCalibrationModes: (isNLLVSwitch: boolean) => exposes.Enum;
};
export declare const readInitialBatteryState: OnEvent.Handler;
export declare const tzLegrand: {
    auto_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                auto_mode: unknown;
            };
        }>;
    };
    cover_state_with_moving: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<KeyValueAny>;
    };
    cover_position_with_moving: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: any;
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    calibration_mode: (isNLLVSwitch: boolean) => {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    led_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    identify: {
        key: string[];
        options: exposes.Composite[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    legrand_device_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                device_mode: string;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    light_state_device_mode_aware: {
        key: string[];
        options: exposes.Numeric[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
    };
    pilot_wire_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                pilot_wire_mode: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    power_alarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
};
export declare const fzLegrand: {
    calibration_mode: (isNLLVSwitch: boolean) => {
        cluster: "closuresWindowCovering";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"closuresWindowCovering", LegrandClosuresWindowCovering, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            calibration_mode: string;
        };
    };
    cluster_fc01: {
        cluster: "manuSpecificLegrandDevices";
        type: ["readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"manuSpecificLegrandDevices", LegrandDevicesCluster, ["readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    stop_poll_on_checkin: {
        cluster: "genPollCtrl";
        type: ["commandCheckin"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genPollCtrl", undefined, ["commandCheckin"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => void;
    };
    command_cover: {
        cluster: "closuresWindowCovering";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"closuresWindowCovering", TuyaClosuresWindowCovering, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    cover_moving_state: {
        cluster: "closuresWindowCovering";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"closuresWindowCovering", TuyaClosuresWindowCovering, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            state: string;
            action: string;
            moving: boolean;
        };
    };
    identify: {
        cluster: "genIdentify";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genIdentify", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {};
    };
    master_switch_center: {
        cluster: "manuSpecificLegrandDevices";
        type: "raw";
        convert: (model: import("..").Definition, msg: Fz.Message<"manuSpecificLegrandDevices", LegrandDevicesCluster, "raw">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    pilot_wire_mode: {
        cluster: "manuSpecificLegrandDevices2";
        type: ["readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"manuSpecificLegrandDevices2", LegrandDevicesCluster2, ["readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            pilot_wire_mode: string;
        };
    };
    binary_input_moving: {
        cluster: "genBinaryInput";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genBinaryInput", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    binary_input_on_off: {
        cluster: "genBinaryInput";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genBinaryInput", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            [x: string]: string;
        };
    };
    scenes: {
        cluster: "genScenes";
        type: "commandRecall";
        convert: (model: import("..").Definition, msg: Fz.Message<"genScenes", undefined, "commandRecall">, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: any;
        };
    };
    power_alarm: {
        cluster: "haElectricalMeasurement";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"haElectricalMeasurement", LegrandHaElectricalMeasurement, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    greenpower: {
        cluster: "greenPower";
        type: ["commandNotification", "commandCommissioningNotification"];
        convert: (model: import("..").Definition, msg: Fz.Message<"greenPower", undefined, ["commandNotification", "commandCommissioningNotification"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
};
export {};
//# sourceMappingURL=legrand.d.ts.map