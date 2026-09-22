import type { DefinitionWithExtend } from "../lib/types";
type HumidityComfortLimits = {
    humidityLower: number;
    humidityUpper: number;
    temperatureLower: number;
    temperatureUpper: number;
};
type TemperatureKind = "absolute" | "delta";
export declare function toDisplayTemperature(value: number, fahrenheit: boolean): number;
export declare function toDisplayTemperature(value: number, kind: TemperatureKind, fahrenheit: boolean): number;
export declare function toCelsiusTemperature(value: number, fahrenheit: boolean): number;
export declare function toCelsiusTemperature(value: number, kind: TemperatureKind, fahrenheit: boolean): number;
export declare function resolveTemperatureWrite(displayValue: number, fahrenheit: boolean, confirmedDeviceValue: number | undefined, kind?: "absolute" | "delta"): {
    shouldWrite: boolean;
    deviceValue: number;
    stateValue: number;
};
export declare function computeDewPoint(temperature: number, humidity: number): number | undefined;
export declare function computeVpd(temperature: number, humidity: number): number;
export declare function computeHumidityComfort(temperature: number, humidity: number, limits?: HumidityComfortLimits): "dry" | "comfort" | "wet" | "normal";
export declare function validateAlarmLimits(state: Record<string, number>): void;
export declare function formatFaultCode(value: number): string;
export declare const definitions: DefinitionWithExtend[];
export {};
//# sourceMappingURL=rti_tek.d.ts.map