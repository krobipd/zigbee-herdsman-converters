import type { DefinitionWithExtend, Fz, KeyValueAny, Tz } from "../lib/types";
interface EurotronicHvacThermostat {
    attributes: {
        trvMode: number;
        valvePosition: number;
        errorStatus: number;
        currentHeatingSetpoint: number;
        hostFlags: number;
    };
    commands: never;
    commandResponses: never;
}
export declare const eurotronicExtend: {
    addEurotronicHvacThermostatCluster: () => import("../lib/types").ModernExtend;
};
export declare const tzLocal: {
    eurotronic_host_flags: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    eurotronic_error_status: {
        key: string[];
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    eurotronic_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    eurotronic_valve_position: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    eurotronic_trv_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    eurotronic_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
    };
    eurotronic_mirror_display: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [x: string]: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
};
export declare const fzLocal: {
    eurotronic_thermostat: {
        cluster: "hvacThermostat";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("..").Definition, msg: Fz.Message<"hvacThermostat", EurotronicHvacThermostat, ["attributeReport", "readResponse"]>, publish: import("../lib/types").Publish, options: import("../lib/types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
};
export declare const definitions: DefinitionWithExtend[];
export {};
//# sourceMappingURL=eurotronic.d.ts.map