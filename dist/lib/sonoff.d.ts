import type { Fz } from "./types";
/**
 * Unix timestamp in seconds for `2000-01-01T00:00:00Z`.
 * Sonoff irrigation devices encode local datetimes relative to this base.
 */
export declare const YEAR_2000_IN_UTC: number;
/**
 * Convert Unix UTC seconds to device local-time seconds (2000 base).
 */
export declare const utcToDeviceLocal2000Seconds: (utcSeconds: number, offsetSeconds: number) => number;
/**
 * Convert device local-time seconds (2000 base) back to Unix UTC seconds.
 */
export declare const deviceLocal2000ToUTCSeconds: (deviceSeconds: number, offsetSeconds: number) => number;
/**
 * Parse ISO 8601 datetime (must include `Z` or `±HH:mm`) to Unix UTC seconds.
 * Returns `undefined` when format is invalid or parsed value is negative.
 */
export declare const parseIsoWithOffsetToUtcSeconds: (value: string) => number | undefined;
/**
 * Get runtime local timezone offset in seconds for the specified UTC timestamp.
 */
export declare const getRuntimeLocalOffsetSeconds: (utcSeconds: number) => number;
/**
 * Format Unix UTC seconds to ISO 8601 with the specified timezone offset.
 * Falls back to the runtime local timezone offset when not provided.
 */
export declare const formatUtcSecondsToIsoWithOffset: (utcSeconds: number, offsetSeconds?: number) => string;
/**
 * Shift UTC seconds by local calendar months under a fixed UTC -> local offset.
 */
export declare const shiftUtcSecondsByOffsetMonths: (utcSeconds: number, monthDelta: number, offsetSeconds?: number) => number;
/**
 * Parsed view of a raw SWV-ZN/ZF ZCL frame.
 */
type ParsedSWVZFRawZclCommand = {
    commandId: number;
    payload: Buffer;
};
/**
 * Extract the ZCL command id and payload from a raw SWV-ZN/ZF frame.
 * Handles both standard and manufacturer-specific headers.
 */
export declare const parseSWVZFRawZclCommand: (buffer: Buffer) => ParsedSWVZFRawZclCommand | undefined;
/**
 * Swap the byte order of a 32-bit value reported as a big-endian unsigned integer.
 */
export declare const toBigEndianUInt32: (rawValue: number) => number;
/**
 * Decode a 32-bit milli-value that is exposed through a UINT32 ZCL attribute
 * but uses two's-complement encoding when the reported value is below zero.
 */
export declare const signedInt32MilliToValue: (value: number) => number;
/**
 * Read an unsigned 32-bit little-endian integer from an array-like byte buffer.
 */
export declare const readUInt32LE: (data: ArrayLike<number>, index: number) => number;
/**
 * Read an unsigned 40-bit little-endian integer from an array-like byte buffer.
 * Multiplication avoids JavaScript's 32-bit bitwise truncation.
 */
export declare const readUInt40LE: (data: ArrayLike<number>, index: number) => number;
/**
 * Read an unsigned 16-bit little-endian integer from an array-like byte buffer.
 */
export declare const readUInt16LE: (data: ArrayLike<number>, index: number) => number;
/**
 * Normalize Zigbee-herdsman ZCL array values to a plain byte array.
 * Depending on the decoder path, arrays may arrive as `Uint8Array`, `number[]`,
 * or an object with an `elements` field.
 */
export declare const zclArrayValueToBytes: (value: unknown) => number[] | undefined;
/**
 * Decode a Sonoff private attribute whose value is a ZCL array containing one
 * unsigned 32-bit little-endian integer.
 */
export declare const zclArrayUInt32FzConvert: (name: string, attributeKey: string) => Fz.Converter<string>["convert"];
/**
 * Encode an unsigned 32-bit integer as little-endian bytes.
 */
export declare const toUInt32LEBytes: (value: number) => number[];
/**
 * Encode an unsigned 16-bit integer as little-endian bytes.
 */
export declare const toUInt16LEBytes: (value: number) => number[];
/**
 * Format a time-of-day value stored as seconds since midnight.
 * Uses `HH:mm` when there are no seconds, otherwise `HH:mm:ss`.
 */
export declare const formatSecondsToTimeSinceMidnight: (seconds: number) => string;
/**
 * Parse `HH:mm` or `HH:mm:ss` into seconds since midnight.
 * Throws when the format is invalid or points outside the current day.
 */
export declare const parseTimeToSecondsSinceMidnight: (time: string, field?: string) => number;
export {};
//# sourceMappingURL=sonoff.d.ts.map