import * as modernExtend from "./modernExtend";
import type { Fz, KeyValue, KeyValueAny, Tz } from "./types";
export interface NamronHvacThermostat {
    attributes: {
        operateDisplayBrightness: number;
        displayAutoOff: number;
        floorSensorType: number;
        controlType: number;
        powerUpStatus: number;
        floorSensorCalibration: number;
        dryTime: number;
        modeAfterDry: number;
        temperatureDisplay: number;
        windowOpenCheck2: number;
        hysterersis: number;
        windowOpen: number;
        adaptiveFunction: number;
        alarmAirTempOverValue: number;
        awayModeSet: number;
        pidKp: number;
        pidKd: number;
        pidKi: number;
        controlMethod: number;
        windowOpenCheck: boolean;
        antiFrost: boolean;
        windowState: boolean;
        workDays: number;
        sensorMode: number;
        displayActiveBacklight: number;
        fault: number;
        backlightOnoff: boolean;
        timeSync: boolean;
        deviceTime: number;
        absMinHeatSetpointLimitF: number;
        absMaxHeatSetpointLimitF: number;
        absMinCoolSetpointLimitF: number;
        absMaxCoolSetpointLimitF: number;
        occupiedCoolingSetpointF: number;
        occupiedHeatingSetpointF: number;
        localTemperatureF: number;
        holidayTempSet: number;
        holidayTempSetF: number;
        regulationMode: number;
        regulatorPercentage: number;
        summerWinterSwitch: boolean;
        vacationMode: boolean;
        vacationStartDate: number;
        vacationEndDate: number;
        autoTime: boolean;
        boostTimeSet: number;
        boostTimeRemaining: number;
        displayAutoOff2: number;
    };
    commands: never;
    commandResponses: never;
}
export interface NamronHvacThermostat2 {
    attributes: {
        lcdBrightness: number;
        buttonVibrationLevel: number;
        floorSensorType: number;
        controlType: number;
        powerUpStatus: number;
        floorSensorCalibration: number;
        dryTime: number;
        modeAfterDry: number;
        temperatureDisplay: number;
        windowOpenCheck2: number;
        hysterersis: number;
        displayAutoOffEnable: number;
        alarmAirTempOverValue: number;
        awayModeSet: number;
    };
    commands: never;
    commandResponses: never;
}
export declare const fromZigbee: {
    namron_edge_thermostat_vacation_date: {
        cluster: "hvacThermostat";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("./types").Definition, msg: Fz.Message<"hvacThermostat", NamronHvacThermostat, ["attributeReport", "readResponse"]>, publish: import("./types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    namron_edge_thermostat_holiday_temp: {
        cluster: "hvacThermostat";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("./types").Definition, msg: Fz.Message<"hvacThermostat", NamronHvacThermostat, ["attributeReport", "readResponse"]>, publish: import("./types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValue;
    };
    namron_thermostat: {
        cluster: "hvacThermostat";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("./types").Definition, msg: Fz.Message<"hvacThermostat", NamronHvacThermostat2, ["attributeReport", "readResponse"]>, publish: import("./types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    namron_hvac_user_interface: {
        cluster: "hvacUserInterfaceCfg";
        type: ["attributeReport", "readResponse"];
        convert: (model: import("./types").Definition, msg: Fz.Message<"hvacUserInterfaceCfg", undefined, ["attributeReport", "readResponse"]>, publish: import("./types").Publish, options: KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
};
export declare const toZigbee: {
    namron_edge_thermostat_vacation_date: {
        key: string[];
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    namron_edge_thermostat_holiday_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    namron_thermostat: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    namron_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                child_lock: unknown;
            };
        }>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
};
export declare const edgeThermostat: {
    windowOpenDetection: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    antiFrost: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    summerWinterSwitch: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    vacationMode: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    timeSync: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    autoTime: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    displayActiveBacklight: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    regulatorPercentage: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    regulationMode: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    displayAutoOff: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    sensorMode: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    boostTime: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    systemMode: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", undefined>>) => import("./types").ModernExtend;
    deviceTime: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    absMinHeatSetpointLimitF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    absMaxHeatSetpointLimitF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    absMinCoolSetpointLimitF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    absMaxCoolSetpointLimitF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    occupiedCoolingSetpointF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    occupiedHeatingSetpointF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    localTemperatureF: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    readOnly: {
        windowState: (args?: Partial<modernExtend.BinaryArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
        deviceFault: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
        workDays: (args?: Partial<modernExtend.EnumLookupArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
        boostTimeRemaining: (args?: Partial<modernExtend.NumericArgs<"hvacThermostat", NamronHvacThermostat>>) => import("./types").ModernExtend;
    };
};
export declare const namronExtend: {
    addCustomClusterNamronPrivateE004: () => import("./types").ModernExtend;
    addNamronHvacThermostatCluster: () => import("./types").ModernExtend;
    addNamronHvacThermostat2Cluster: () => import("./types").ModernExtend;
};
//# sourceMappingURL=namron.d.ts.map