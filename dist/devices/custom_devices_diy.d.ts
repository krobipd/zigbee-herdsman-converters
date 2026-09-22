import * as exposes from "../lib/exposes";
import type { DefinitionWithExtend, Fz, KeyValue, KeyValueAny, Tz } from "../lib/types";
export declare const tzLocal: {
    tirouter: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    multi_zig_sw_switch_type: {
        key: string[];
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
    };
    ptvo_on_off: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
    };
    ZigUP_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    ptvo_switch_trigger: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    ptvo_switch_uart: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    ptvo_switch_analog_input: {
        key: string[];
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    ptvo_switch_light_brightness: {
        key: string[];
        options: exposes.Numeric[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<Tz.ConvertSetResult>;
    };
};
export declare const fzLocal: {
    tirouter: {
        cluster: "genBasic";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genBasic", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    humidity2: {
        cluster: "msRelativeHumidity";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"msRelativeHumidity", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            [x: string]: number;
        };
    };
    illuminance2: {
        cluster: "msIlluminanceMeasurement";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"msIlluminanceMeasurement", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            [x: string]: number;
        };
    };
    pressure2: {
        cluster: "msPressureMeasurement";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"msPressureMeasurement", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            [x: string]: number;
        };
    };
    multi_zig_sw_battery: {
        cluster: "genPowerCfg";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genPowerCfg", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            battery: number;
            voltage: number;
        };
    };
    multi_zig_sw_switch_buttons: {
        cluster: "genMultistateInput";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genMultistateInput", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    multi_zig_sw_switch_config: {
        cluster: "genOnOffSwitchCfg";
        type: ["readResponse", "attributeReport"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOffSwitchCfg", undefined, ["readResponse", "attributeReport"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            [x: string]: string;
        };
    };
    acw02_clean_status: {
        cluster: "genOnOff";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOff", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            filter_clean_status: string;
        };
    };
    acw02_error_status: {
        cluster: "genOnOff";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOff", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            ac_error_status: string;
        };
    };
    acw02_error_text: {
        cluster: "genBasic";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genBasic", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            error_text: string;
        };
    };
    acw02_thermostat: {
        cluster: "hvacThermostat";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"hvacThermostat", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    ZigUP: {
        cluster: "genOnOff";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOff", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            [x: string]: any;
            state: string;
            cpu_temperature: number;
            external_temperature: number;
            external_humidity: number;
            s0_counts: unknown;
            adc_volt: number;
            dig_input: unknown;
            reason: any;
        };
    };
    CC2530ROUTER_led: {
        cluster: "genOnOff";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOff", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            led: boolean;
        };
    };
    CC2530ROUTER_meta: {
        cluster: "genBinaryValue";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genBinaryValue", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            description: string;
            type: string;
            rssi: number;
        };
    };
    DNCKAT_S00X_buttons: {
        cluster: "genOnOff";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genOnOff", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
    ptvo_switch_uart: {
        cluster: "genMultistateValue";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genMultistateValue", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string | unknown[];
        };
    };
    ptvo_switch_analog_input: {
        cluster: "genAnalogInput";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genAnalogInput", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    ptvo_multistate_action: {
        cluster: "genMultistateInput";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"genMultistateInput", undefined, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: KeyValue, meta: Fz.Meta) => {
            action: string;
        };
    };
};
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=custom_devices_diy.d.ts.map