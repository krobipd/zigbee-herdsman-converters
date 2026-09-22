import * as exposes from "./exposes";
import type { Definition, Fz, KeyValueNumberString, Publish, Tz } from "./types";
interface KeyValueAny {
    [s: string]: any;
}
declare const thermostatSystemModes2: KeyValueAny;
declare const thermostatSystemModes3: KeyValueAny;
declare const thermostatSystemModes4: KeyValueNumberString;
declare const thermostatPresets: KeyValueNumberString;
declare const msLookups: KeyValueAny;
declare const ZMLookups: {
    AM02Mode: {
        0: string;
        1: string;
    };
    AM02Control: {
        0: string;
        1: string;
        2: string;
        3: string;
    };
    AM02Direction: {
        0: string;
        1: string;
    };
    AM02WorkState: {
        0: string;
        1: string;
    };
    AM02Border: {
        0: string;
        1: string;
        2: string;
    };
    AM02Situation: {
        0: string;
        1: string;
    };
    AM02MotorWorkingMode: {
        0: string;
        1: string;
    };
};
declare const moesSwitch: KeyValueAny;
declare const tuyaHPSCheckingResult: KeyValueAny;
declare const dataPoints: {
    wateringTimer: {
        valve_state_auto_shutdown: number;
        water_flow: number;
        shutdown_timer: number;
        remaining_watering_time: number;
        valve_state: number;
        last_watering_duration: number;
        battery: number;
    };
    state: number;
    heatingSetpoint: number;
    coverPosition: number;
    dimmerLevel: number;
    dimmerMinLevel: number;
    localTemp: number;
    coverArrived: number;
    occupancy: number;
    mode: number;
    fanMode: number;
    dimmerMaxLevel: number;
    motorDirection: number;
    config: number;
    childLock: number;
    coverChange: number;
    runningState: number;
    valveDetection: number;
    battery: number;
    tempCalibration: number;
    waterLeak: number;
    minTemp: number;
    maxTemp: number;
    windowDetection: number;
    boostTime: number;
    coverSpeed: number;
    forceMode: number;
    comfortTemp: number;
    ecoTemp: number;
    valvePos: number;
    batteryLow: number;
    weekFormat: number;
    scheduleWorkday: number;
    scheduleHoliday: number;
    awayTemp: number;
    windowOpen: number;
    autoLock: number;
    awayDays: number;
    eardaDimmerLevel: number;
    siterwellWindowDetection: number;
    moesHold: number;
    moesScheduleEnable: number;
    moesHeatingSetpoint: number;
    moesMaxTempLimit: number;
    moesMaxTemp: number;
    moesDeadZoneTemp: number;
    moesLocalTemp: number;
    moesMinTempLimit: number;
    moesTempCalibration: number;
    moesValve: number;
    moesChildLock: number;
    moesSensor: number;
    moesSchedule: number;
    etopErrorStatus: number;
    moesSsystemMode: number;
    moesSheatingSetpoint: number;
    moesSlocalTemp: number;
    moesSboostHeating: number;
    moesSboostHeatingCountdown: number;
    moesSreset: number;
    moesSwindowDetectionFunktion_A2: number;
    moesSwindowDetection: number;
    moesSchildLock: number;
    moesSbattery: number;
    moesSschedule: number;
    moesSvalvePosition: number;
    moesSboostHeatingCountdownTimeSet: number;
    moesScompensationTempSet: number;
    moesSecoMode: number;
    moesSecoModeTempSet: number;
    moesSmaxTempSet: number;
    moesSminTempSet: number;
    moesCoverCalibration: number;
    moesCoverBacklight: number;
    moesCoverMotorReversal: number;
    neoOccupancy: number;
    neoPowerType: number;
    neoMelody: number;
    neoDuration: number;
    neoTamper: number;
    neoAlarm: number;
    neoTemp: number;
    neoTempScale: number;
    neoHumidity: number;
    neoMinTemp: number;
    neoMaxTemp: number;
    neoMinHumidity: number;
    neoMaxHumidity: number;
    neoUnknown2: number;
    neoTempAlarm: number;
    neoTempHumidityAlarm: number;
    neoHumidityAlarm: number;
    neoUnknown3: number;
    neoVolume: number;
    neoAOBattPerc: number;
    neoAOMelody: number;
    neoAODuration: number;
    neoAOAlarm: number;
    neoAOVolume: number;
    saswellHeating: number;
    saswellWindowDetection: number;
    saswellFrostDetection: number;
    saswellTempCalibration: number;
    saswellChildLock: number;
    saswellState: number;
    saswellLocalTemp: number;
    saswellHeatingSetpoint: number;
    saswellValvePos: number;
    saswellBatteryLow: number;
    saswellAwayMode: number;
    saswellScheduleMode: number;
    saswellScheduleEnable: number;
    saswellScheduleSet: number;
    saswellSetpointHistoryDay: number;
    saswellTimeSync: number;
    saswellSetpointHistoryWeek: number;
    saswellSetpointHistoryMonth: number;
    saswellSetpointHistoryYear: number;
    saswellLocalHistoryDay: number;
    saswellLocalHistoryWeek: number;
    saswellLocalHistoryMonth: number;
    saswellLocalHistoryYear: number;
    saswellMotorHistoryDay: number;
    saswellMotorHistoryWeek: number;
    saswellMotorHistoryMonth: number;
    saswellMotorHistoryYear: number;
    saswellScheduleSunday: number;
    saswellScheduleMonday: number;
    saswellScheduleTuesday: number;
    saswellScheduleWednesday: number;
    saswellScheduleThursday: number;
    saswellScheduleFriday: number;
    saswellScheduleSaturday: number;
    saswellAntiScaling: number;
    hyHeating: number;
    hyExternalTemp: number;
    hyAwayDays: number;
    hyAwayTemp: number;
    hyMaxTempProtection: number;
    hyMinTempProtection: number;
    hyTempCalibration: number;
    hyHysteresis: number;
    hyProtectionHysteresis: number;
    hyProtectionMaxTemp: number;
    hyProtectionMinTemp: number;
    hyMaxTemp: number;
    hyMinTemp: number;
    hySensor: number;
    hyPowerOnBehavior: number;
    hyWeekFormat: number;
    hyWorkdaySchedule1: number;
    hyWorkdaySchedule2: number;
    hyHolidaySchedule1: number;
    hyHolidaySchedule2: number;
    hyState: number;
    hyHeatingSetpoint: number;
    hyLocalTemp: number;
    hyMode: number;
    hyChildLock: number;
    hyAlarm: number;
    silvercrestChangeMode: number;
    silvercrestSetBrightness: number;
    silvercrestSetColorTemp: number;
    silvercrestSetColor: number;
    silvercrestSetEffect: number;
    fantemPowerSupplyMode: number;
    fantemReportingTime: number;
    fantemExtSwitchType: number;
    fantemTempCalibration: number;
    fantemHumidityCalibration: number;
    fantemLoadDetectionMode: number;
    fantemLuxCalibration: number;
    fantemExtSwitchStatus: number;
    fantemTemp: number;
    fantemHumidity: number;
    fantemMotionEnable: number;
    fantemControlMode: number;
    fantemBattery: number;
    fantemLedEnable: number;
    fantemReportingEnable: number;
    fantemLoadType: number;
    fantemLoadDimmable: number;
    wooxSwitch: number;
    wooxBattery: number;
    wooxSmokeTest: number;
    wooxDormancy: number;
    wooxRefresh: number;
    wooxControlTemperature: number;
    wooxManualTemperatureSetpoint: number;
    wooxAutomaticTemperatureSetpoint: number;
    wooxMode: number;
    wooxLocalTemperature: number;
    wooxTemperatureCalibration: number;
    wooxWindowStatus: number;
    wooxWindowTemperature: number;
    wooxWindowTime: number;
    wooxChildLock: number;
    wooxBatteryCapacity: number;
    wooxEnergySavingTemperature: number;
    wooxComfortTemperature: number;
    wooxHolidayModeSettings: number;
    wooxProgrammingMonday: number;
    wooxProgrammingTuesday: number;
    wooxProgrammingWednesday: number;
    wooxProgrammingThursday: number;
    wooxProgrammingFriday: number;
    wooxProgrammingSaturday: number;
    wooxProgrammingSunday: number;
    wooxBoostHeating: number;
    wooxFaultAlarm: number;
    wooxBoostHeatingCountdown: number;
    frankEverTimer: number;
    frankEverTreshold: number;
    dinrailPowerMeterTotalEnergy: number;
    dinrailPowerMeterCurrent: number;
    dinrailPowerMeterPower: number;
    dinrailPowerMeterVoltage: number;
    dinrailPowerMeterTotalEnergy2: number;
    dinrailPowerMeterPower2: number;
    tuyaSabCO2: number;
    tuyaSabTemp: number;
    tuyaSabHumidity: number;
    tuyaSabVOC: number;
    tuyaSabFormaldehyd: number;
    tuyaSahkMP25: number;
    tuyaSahkCO2: number;
    tuyaSahkFormaldehyd: number;
    tuyaSabCOalarm: number;
    tuyaSabCO: number;
    moes105DimmerState1: number;
    moes105DimmerLevel1: number;
    moes105DimmerState2: number;
    moes105DimmerLevel2: number;
    trsPresenceState: number;
    trsSensitivity: number;
    trsMotionState: number;
    trsIlluminanceLux: number;
    trsDetectionData: number;
    trsScene: number;
    trsMotionDirection: number;
    trsMotionSpeed: number;
    trsfPresenceState: number;
    trsfSensitivity: number;
    trsfMotionState: number;
    trsfIlluminanceLux: number;
    trsfTumbleSwitch: number;
    trsfTumbleAlarmTime: number;
    trsfScene: number;
    trsfMotionDirection: number;
    trsfMotionSpeed: number;
    trsfFallDownStatus: number;
    trsfStaticDwellAlarm: number;
    trsfFallSensitivity: number;
    msVSensitivity: number;
    msOSensitivity: number;
    msVacancyDelay: number;
    msMode: number;
    msVacantConfirmTime: number;
    msReferenceLuminance: number;
    msLightOnLuminancePrefer: number;
    msLightOffLuminancePrefer: number;
    msLuminanceLevel: number;
    msLedStatus: number;
    tvMode: number;
    tvWindowDetection: number;
    tvFrostDetection: number;
    tvHeatingSetpoint: number;
    tvLocalTemp: number;
    tvTempCalibration: number;
    tvWorkingDay: number;
    tvHolidayTemp: number;
    tvBattery: number;
    tvChildLock: number;
    tvErrorStatus: number;
    tvHolidayMode: number;
    tvBoostTime: number;
    tvOpenWindowTemp: number;
    tvComfortTemp: number;
    tvEcoTemp: number;
    tvWeekSchedule: number;
    tvHeatingStop: number;
    tvMondaySchedule: number;
    tvWednesdaySchedule: number;
    tvFridaySchedule: number;
    tvSundaySchedule: number;
    tvTuesdaySchedule: number;
    tvThursdaySchedule: number;
    tvSaturdaySchedule: number;
    tvBoostMode: number;
    hochCountdownTimer: number;
    hochFaultCode: number;
    hochRelayStatus: number;
    hochChildLock: number;
    hochVoltage: number;
    hochCurrent: number;
    hochActivePower: number;
    hochLeakageCurrent: number;
    hochTemperature: number;
    hochRemainingEnergy: number;
    hochRechargeEnergy: number;
    hochCostParameters: number;
    hochLeakageParameters: number;
    hochVoltageThreshold: number;
    hochCurrentThreshold: number;
    hochTemperatureThreshold: number;
    hochTotalActivePower: number;
    hochEquipmentNumberType: number;
    hochClearEnergy: number;
    hochLocking: number;
    hochTotalReverseActivePower: number;
    hochHistoricalVoltage: number;
    hochHistoricalCurrent: number;
    nousTemperature: number;
    nousHumidity: number;
    nousBattery: number;
    nousTempUnitConvert: number;
    nousMaxTemp: number;
    nousMinTemp: number;
    nousMaxHumi: number;
    nousMinHumi: number;
    nousTempAlarm: number;
    nousHumiAlarm: number;
    nousHumiSensitivity: number;
    nousTempSensitivity: number;
    nousTempReportInterval: number;
    nousHumiReportInterval: number;
    tthTemperature: number;
    tthHumidity: number;
    tthBatteryLevel: number;
    tthBattery: number;
    thitBatteryPercentage: number;
    thitIlluminanceLux: number;
    tIlluminanceLux: number;
    thitHumidity: number;
    thitTemperature: number;
    tuyaVibration: number;
    wlsWaterLeak: number;
    wlsBatteryPercentage: number;
    evanellMode: number;
    evanellHeatingSetpoint: number;
    evanellLocalTemp: number;
    evanellBattery: number;
    evanellChildLock: number;
    AM02Control: number;
    AM02PercentControl: number;
    AM02PercentState: number;
    AM02Mode: number;
    AM02Direction: number;
    AM02WorkState: number;
    AM02CountdownLeft: number;
    AM02TimeTotal: number;
    AM02SituationSet: number;
    AM02Fault: number;
    AM02Border: number;
    AM02MotorWorkingMode: number;
    AM02AddRemoter: number;
    garageDoorTrigger: number;
    garageDoorContact: number;
    garageDoorStatus: number;
    moesSwitchPowerOnBehavior: number;
    moesSwitchIndicateLight: number;
    x5hState: number;
    x5hMode: number;
    x5hWorkingStatus: number;
    x5hSound: number;
    x5hFrostProtection: number;
    x5hSetTemp: number;
    x5hSetTempCeiling: number;
    x5hCurrentTemp: number;
    x5hTempCorrection: number;
    x5hWeeklyProcedure: number;
    x5hWorkingDaySetting: number;
    x5hFactoryReset: number;
    x5hChildLock: number;
    x5hSensorSelection: number;
    x5hFaultAlarm: number;
    x5hTempDiff: number;
    x5hProtectionTempLimit: number;
    x5hOutputReverse: number;
    x5hBackplaneBrightness: number;
    connecteState: number;
    connecteMode: number;
    connecteHeatingSetpoint: number;
    connecteLocalTemp: number;
    connecteTempCalibration: number;
    connecteChildLock: number;
    connecteTempFloor: number;
    connecteSensorType: number;
    connecteHysteresis: number;
    connecteRunningState: number;
    connecteTempProgram: number;
    connecteOpenWindow: number;
    connecteMaxProtectTemp: number;
    tshpsPresenceState: number;
    tshpscSensitivity: number;
    tshpsMinimumRange: number;
    tshpsMaximumRange: number;
    tshpsTargetDistance: number;
    tshpsDetectionDelay: number;
    tshpsFadingTime: number;
    tshpsIlluminanceLux: number;
    tshpsCLI: number;
    tshpsSelfTest: number;
    lmsState: number;
    lmsBattery: number;
    lmsSensitivity: number;
    lmsKeepTime: number;
    lmsIlluminance: number;
    alectoSmokeState: number;
    alectoSmokeValue: number;
    alectoSelfChecking: number;
    alectoCheckingResult: number;
    alectoSmokeTest: number;
    alectoLifecycle: number;
    alectoBatteryState: number;
    alectoBatteryPercentage: number;
    alectoSilence: number;
    bacFanMode: number;
    HPSZInductionState: number;
    HPSZPresenceTime: number;
    HPSZLeavingTime: number;
    HPSZLEDState: number;
    giexWaterValve: {
        battery: number;
        currentTemperature: number;
        cycleIrrigationInterval: number;
        cycleIrrigationNumTimes: number;
        irrigationEndTime: number;
        irrigationStartTime: number;
        irrigationTarget: number;
        lastIrrigationDuration: number;
        mode: number;
        state: number;
        waterConsumed: number;
    };
    zsHeatingSetpoint: number;
    zsChildLock: number;
    zsTempCalibration: number;
    zsLocalTemp: number;
    zsBatteryVoltage: number;
    zsComfortTemp: number;
    zsEcoTemp: number;
    zsHeatingSetpointAuto: number;
    zsOpenwindowTemp: number;
    zsOpenwindowTime: number;
    zsErrorStatus: number;
    zsMode: number;
    zsAwaySetting: number;
    zsBinaryOne: number;
    zsBinaryTwo: number;
    zsScheduleMonday: number;
    zsScheduleTuesday: number;
    zsScheduleWednesday: number;
    zsScheduleThursday: number;
    zsScheduleFriday: number;
    zsScheduleSaturday: number;
    zsScheduleSunday: number;
};
declare const giexWaterValve: {
    battery: string;
    currentTemperature: string;
    cycleIrrigationInterval: string;
    cycleIrrigationNumTimes: string;
    irrigationEndTime: string;
    irrigationStartTime: string;
    irrigationTarget: string;
    lastIrrigationDuration: string;
    mode: string;
    state: string;
    waterConsumed: string;
};
declare const fromZigbee: {
    TS0222: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    watering_timer: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    ZM35HQ_battery: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery: any;
        };
    };
    ZMRM02: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery: any;
            action?: undefined;
        } | {
            battery?: undefined;
            action: string;
        };
    };
    SA12IZL: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    R7049_status: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    woox_R7060: {
        cluster: "manuSpecificTuya";
        type: ["commandActiveStatusReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandActiveStatusReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            state: string;
        } | {
            state?: undefined;
            battery: any;
        };
    };
    woox_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    hpsz: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            presence: boolean;
            duration_of_attendance?: undefined;
            duration_of_absence?: undefined;
            led_state?: undefined;
        } | {
            presence?: undefined;
            duration_of_attendance: any;
            duration_of_absence?: undefined;
            led_state?: undefined;
        } | {
            presence?: undefined;
            duration_of_attendance?: undefined;
            duration_of_absence: any;
            led_state?: undefined;
        } | {
            presence?: undefined;
            duration_of_attendance?: undefined;
            duration_of_absence?: undefined;
            led_state: any;
        };
    };
    zb_sm_cover: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    x5h_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            system_mode: string;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state: string;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound: string;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection: string;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week: any;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset: string;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature: number;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit: any;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state: any;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule: string;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock: string;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint: number;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp: any;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature: number;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration: number;
            preset?: undefined;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset: any;
            sensor?: undefined;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor: any;
            output_reverse?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            sound?: undefined;
            frost_protection?: undefined;
            week?: undefined;
            factory_reset?: undefined;
            deadzone_temperature?: undefined;
            heating_temp_limit?: undefined;
            brightness_state?: undefined;
            schedule?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            upper_temp?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            output_reverse: any;
        };
    };
    zs_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    giexWaterValve: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            [giexWaterValve.irrigationTarget]: any;
        };
    };
    tuya_alecto_smoke: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            smoke_state: any;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value: any;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking: any;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result: any;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test: any;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle: any;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery: any;
            battery_state?: undefined;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state: any;
            silence?: undefined;
        } | {
            battery?: undefined;
            smoke_state?: undefined;
            smoke_value?: undefined;
            self_checking?: undefined;
            checking_result?: undefined;
            smoke_test?: undefined;
            lifecycle?: undefined;
            battery_state?: undefined;
            silence: any;
        };
    };
    blitzwolf_occupancy_with_timeout: {
        cluster: "manuSpecificTuya";
        type: "commandDataResponse";
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, "commandDataResponse">, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    moes_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program: {
                weekdays_p1_hour: any;
                weekdays_p1_minute: any;
                weekdays_p1_temperature: number;
                weekdays_p2_hour: any;
                weekdays_p2_minute: any;
                weekdays_p2_temperature: number;
                weekdays_p3_hour: any;
                weekdays_p3_minute: any;
                weekdays_p3_temperature: number;
                weekdays_p4_hour: any;
                weekdays_p4_minute: any;
                weekdays_p4_temperature: number;
                saturday_p1_hour: any;
                saturday_p1_minute: any;
                saturday_p1_temperature: number;
                saturday_p2_hour: any;
                saturday_p2_minute: any;
                saturday_p2_temperature: number;
                saturday_p3_hour: any;
                saturday_p3_minute: any;
                saturday_p3_temperature: number;
                saturday_p4_hour: any;
                saturday_p4_minute: any;
                saturday_p4_temperature: number;
                sunday_p1_hour: any;
                sunday_p1_minute: any;
                sunday_p1_temperature: number;
                sunday_p2_hour: any;
                sunday_p2_minute: any;
                sunday_p2_temperature: number;
                sunday_p3_hour: any;
                sunday_p3_minute: any;
                sunday_p3_temperature: number;
                sunday_p4_hour: any;
                sunday_p4_minute: any;
                sunday_p4_temperature: number;
            };
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            system_mode: any;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode: string;
            preset: string;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            child_lock: string;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            current_heating_setpoint: any;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit: any;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit: any;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature: any;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            deadzone_temperature: any;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            local_temperature: number;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            local_temperature_calibration: any;
            heat?: undefined;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat: string;
            running_state: string;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            sensor: string;
            fan_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            deadzone_temperature?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            sensor?: undefined;
            program?: undefined;
            preset_mode?: undefined;
            min_temperature_limit?: undefined;
            max_temperature_limit?: undefined;
            max_temperature?: undefined;
            heat?: undefined;
            fan_mode: any;
        };
    };
    moesS_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            max_temperature?: undefined;
            preset: any;
            system_mode: string;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            current_heating_setpoint: any;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            local_temperature: number;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating: string;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown: any;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            running_state: string;
            valve_state: string;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection: string;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window: string;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            child_lock: string;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            battery: any;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set: any;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position: any;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            local_temperature_calibration: any;
            local_temperature?: any;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode: string;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature: any;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            max_temperature: any;
            min_temperature?: undefined;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature: any;
            programming_mode?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            max_temperature?: undefined;
            boost_heating?: undefined;
            boost_heating_countdown?: undefined;
            valve_state?: undefined;
            window_detection?: undefined;
            window?: undefined;
            boost_heating_countdown_time_set?: undefined;
            position?: undefined;
            eco_mode?: undefined;
            eco_temperature?: undefined;
            min_temperature?: undefined;
            programming_mode: string;
        };
    };
    tuya_air_quality: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            temperature: number;
            humidity?: undefined;
            co2?: undefined;
            formaldehyd?: undefined;
            pm25?: undefined;
            voc?: undefined;
        } | {
            temperature?: undefined;
            humidity: number;
            co2?: undefined;
            formaldehyd?: undefined;
            pm25?: undefined;
            voc?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            co2: any;
            formaldehyd?: undefined;
            pm25?: undefined;
            voc?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            co2?: undefined;
            formaldehyd: any;
            pm25?: undefined;
            voc?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            co2?: undefined;
            formaldehyd?: undefined;
            pm25: any;
            voc?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            co2?: undefined;
            formaldehyd?: undefined;
            pm25?: undefined;
            voc: any;
        };
    };
    tuya_CO: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            co: number;
            carbon_monoxide?: undefined;
        } | {
            co?: undefined;
            carbon_monoxide: string;
        };
    };
    connecte_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            state: string;
            away_mode?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            system_mode: string;
            away_mode: string;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            current_heating_setpoint: any;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            local_temperature: any;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            local_temperature_calibration: any;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            child_lock: string;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            external_temperature: any;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            external_temperature?: undefined;
            sensor: any;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            external_temperature?: undefined;
            hysteresis: any;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            running_state: string;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            away_mode?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            window_detection: string;
            max_temperature_protection?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            sensor?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection: any;
        };
    };
    saswell_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating: string;
            running_state: string;
            frost_detection?: undefined;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            window_detection: string;
            frost_detection?: undefined;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection: string;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            local_temperature_calibration: any;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            child_lock: string;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            system_mode: string;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            local_temperature: number;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            current_heating_setpoint: number;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            battery_low: boolean;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            window_detection?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            battery_low?: undefined;
            away_mode: string;
            preset_mode: string;
            schedule_mode?: undefined;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            battery_low?: undefined;
            schedule_mode: any;
            anti_scaling?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset_mode?: undefined;
            window_detection?: undefined;
            away_mode?: undefined;
            heating?: undefined;
            frost_detection?: undefined;
            battery_low?: undefined;
            schedule_mode?: undefined;
            anti_scaling: string;
        };
    };
    evanell_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    etop_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            system_mode: string;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            high_temperature: string;
            low_temperature: string;
            internal_sensor_error: string;
            external_sensor_error: string;
            battery_low: boolean;
            device_offline: string;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
            child_lock: string;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
            current_heating_setpoint: string;
        } | {
            system_mode?: undefined;
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
            local_temperature: string;
        } | {
            running_state?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
            system_mode: string;
            away_mode: string;
            preset: string;
        } | {
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            away_mode?: undefined;
            battery_low?: undefined;
            high_temperature?: undefined;
            low_temperature?: undefined;
            internal_sensor_error?: undefined;
            external_sensor_error?: undefined;
            device_offline?: undefined;
            running_state: string;
        };
    };
    tuya_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    tuya_dimmer: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            state: string;
            min_brightness?: undefined;
            max_brightness?: undefined;
            brightness?: undefined;
            level?: undefined;
        } | {
            state?: undefined;
            brightness: number;
            min_brightness?: undefined;
            max_brightness?: undefined;
            level?: undefined;
        } | {
            state?: undefined;
            min_brightness: number;
            max_brightness?: undefined;
            brightness?: undefined;
            level?: undefined;
        } | {
            state?: undefined;
            min_brightness?: undefined;
            max_brightness: number;
            brightness?: undefined;
            level?: undefined;
        } | {
            state?: undefined;
            min_brightness?: undefined;
            max_brightness?: undefined;
            brightness: number;
            level: any;
        };
    };
    tuya_motion_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            occupancy: any;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance: any;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity: any;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity: any;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status: any;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay: any;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer: any;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer: any;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode: any;
            vacant_confirm_time?: undefined;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time: any;
            luminance_level?: undefined;
        } | {
            occupancy?: undefined;
            reference_luminance?: undefined;
            o_sensitivity?: undefined;
            v_sensitivity?: undefined;
            led_status?: undefined;
            vacancy_delay?: undefined;
            light_on_luminance_prefer?: undefined;
            light_off_luminance_prefer?: undefined;
            mode?: undefined;
            vacant_confirm_time?: undefined;
            luminance_level: any;
        };
    };
    tuya_smart_vibration_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    matsee_garage_door_opener: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    moes_thermostat_tv: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport", "raw"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport", "raw"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            system_mode: string;
            preset: string;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            window_detection: any;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection: any;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            current_heating_setpoint: string;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            local_temperature: string;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            local_temperature_calibration: string;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature: string;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            battery: any;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            child_lock: any;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error: any;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode: any;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            boost_heating_countdown: any;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature: string;
            comfort_temperature?: undefined;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature: string;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            eco_temperature: string;
            heating_stop?: undefined;
        } | {
            battery?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            system_mode: string;
            heating_stop: boolean;
        } | {
            battery?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            preset?: undefined;
            boost_heating_countdown?: undefined;
            window_detection?: undefined;
            eco_temperature?: undefined;
            frost_detection?: undefined;
            holiday_temperature?: undefined;
            error?: undefined;
            holiday_mode?: undefined;
            open_window_temperature?: undefined;
            comfort_temperature?: undefined;
            heating_stop: boolean;
        };
    };
    hoch_din: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    tuya_light_wz5: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    ZMAM02_cover: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        options: exposes.Binary[];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            mode?: undefined;
            running: boolean;
            position: number;
            state: string;
            motor_speed?: undefined;
            motor_working_mode?: undefined;
            border?: undefined;
            motor_direction?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            mode?: undefined;
            running: boolean;
            motor_speed?: undefined;
            motor_working_mode?: undefined;
            border?: undefined;
            motor_direction?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            mode?: undefined;
            running?: undefined;
            motor_speed: any;
            motor_working_mode?: undefined;
            border?: undefined;
            motor_direction?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            mode?: undefined;
            running?: undefined;
            motor_speed?: undefined;
            motor_working_mode: string;
            border?: undefined;
            motor_direction?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            mode?: undefined;
            running?: undefined;
            motor_speed?: undefined;
            motor_working_mode?: undefined;
            border: string;
            motor_direction?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            mode?: undefined;
            running?: undefined;
            motor_speed?: undefined;
            motor_working_mode?: undefined;
            border?: undefined;
            motor_direction: string;
        } | {
            state?: undefined;
            position?: undefined;
            running?: undefined;
            motor_speed?: undefined;
            motor_working_mode?: undefined;
            border?: undefined;
            motor_direction?: undefined;
            mode: string;
        };
    };
    tm081: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            contact: boolean;
        } | {
            contact?: undefined;
            battery: any;
        };
    };
    tuya_remote: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    tuya_smart_human_presense_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            presence: any;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity: any;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range: number;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range: number;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance: number;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay: number;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time: number;
            illuminance?: undefined;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance: any;
            cli?: undefined;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli: any;
            self_test?: undefined;
        } | {
            presence?: undefined;
            radar_sensitivity?: undefined;
            minimum_range?: undefined;
            maximum_range?: undefined;
            target_distance?: undefined;
            detection_delay?: undefined;
            fading_time?: undefined;
            illuminance?: undefined;
            cli?: undefined;
            self_test: any;
        };
    };
    ZG204ZL_lms: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    moes_cover: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        options: exposes.Binary[];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            state?: undefined;
            running?: undefined;
            position: any;
            backlight?: undefined;
            calibration?: undefined;
            motor_reversal?: undefined;
        } | {
            position?: undefined;
            state: any;
            running: any;
            backlight?: undefined;
            calibration?: undefined;
            motor_reversal?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            running?: undefined;
            backlight: string;
            calibration?: undefined;
            motor_reversal?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            running?: undefined;
            backlight?: undefined;
            calibration: any;
            motor_reversal?: undefined;
        } | {
            state?: undefined;
            position?: undefined;
            running?: undefined;
            backlight?: undefined;
            calibration?: undefined;
            motor_reversal: any;
        };
    };
    tuya_temperature_humidity_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            temperature: number;
            battery_level?: undefined;
        } | {
            battery?: undefined;
            temperature?: undefined;
            battery_low?: undefined;
            humidity: number;
            battery_level?: undefined;
        } | {
            battery?: undefined;
            temperature?: undefined;
            humidity?: undefined;
            battery_level: any;
            battery_low: boolean;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            battery_level?: undefined;
            battery: any;
        };
    };
    nous_lcd_temperature_humidity_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    tuya_illuminance_temperature_humidity_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            humidity?: undefined;
            illuminance?: undefined;
            temperature: number;
        } | {
            battery?: undefined;
            temperature?: undefined;
            illuminance?: undefined;
            humidity: any;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            illuminance?: undefined;
            battery: any;
        } | {
            battery?: undefined;
            temperature?: undefined;
            humidity?: undefined;
            illuminance: any;
        };
    };
    tuya_illuminance_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: KeyValueAny, publish: Publish, options: KeyValueAny, meta: Fz.Meta) => {
            illuminance?: undefined;
            brightness_state: any;
        } | {
            brightness_state?: undefined;
            illuminance: any;
        };
    };
    hy_thermostat: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays: {
                hour: any;
                minute: any;
                temperature: any;
            }[];
            range: string;
            holidays?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays: {
                hour: any;
                minute: any;
                temperature: any;
            }[];
            range: string;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            heating: string;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            max_temperature_protection: string;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection: string;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            state: string;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            child_lock: string;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            external_temperature: string;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days: any;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature: any;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            local_temperature_calibration: string;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis: string;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection: any;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection: any;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection: any;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            max_temperature: any;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            min_temperature: any;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            current_heating_setpoint: string;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            local_temperature: string;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type: any;
            power_on_behavior?: undefined;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior: any;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            week: any;
            alarm?: undefined;
        } | {
            state?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            system_mode: any;
            alarm?: undefined;
        } | {
            state?: undefined;
            system_mode?: undefined;
            week?: undefined;
            child_lock?: undefined;
            current_heating_setpoint?: undefined;
            local_temperature?: undefined;
            local_temperature_calibration?: undefined;
            max_temperature?: undefined;
            min_temperature?: undefined;
            external_temperature?: undefined;
            hysteresis?: undefined;
            max_temperature_protection?: undefined;
            heating?: undefined;
            workdays?: undefined;
            holidays?: undefined;
            range?: undefined;
            min_temperature_protection?: undefined;
            away_preset_days?: undefined;
            away_preset_temperature?: undefined;
            hysteresis_for_protection?: undefined;
            max_temperature_for_protection?: undefined;
            min_temperature_for_protection?: undefined;
            sensor_type?: undefined;
            power_on_behavior?: undefined;
            alarm: boolean;
        };
    };
    neo_nas_pd07: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            occupancy: boolean;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type: any;
            battery_low: boolean;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper: boolean;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature: number;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            humidity: any;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min: any;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max: any;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min: any;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max: any;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale: string;
            unknown_111?: undefined;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111: string;
            unknown_112?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112: string;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            occupancy?: undefined;
            power_type?: undefined;
            tamper?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_scale?: undefined;
            unknown_111?: undefined;
            unknown_112?: undefined;
            alarm: any;
        };
    };
    neo_t_h_alarm: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            alarm: any;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm: any;
            humidity_alarm?: undefined;
            duration?: undefined;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm: any;
            duration?: undefined;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            temperature: number;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            humidity: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            temperature_min: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            temperature_max: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            humidity_min: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            humidity_max: any;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            alarm?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            power_type: any;
            battery_low: boolean;
            melody?: undefined;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            melody: any;
            volume?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery_low?: undefined;
            alarm?: undefined;
            power_type?: undefined;
            temperature_min?: undefined;
            temperature_max?: undefined;
            humidity_min?: undefined;
            humidity_max?: undefined;
            temperature_alarm?: undefined;
            humidity_alarm?: undefined;
            duration?: undefined;
            melody?: undefined;
            volume: any;
        };
    };
    neo_alarm: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            duration?: undefined;
            melody?: undefined;
            volume?: undefined;
            alarm: any;
            battpercentage?: undefined;
        } | {
            alarm?: undefined;
            melody?: undefined;
            volume?: undefined;
            duration: any;
            battpercentage?: undefined;
        } | {
            alarm?: undefined;
            duration?: undefined;
            melody?: undefined;
            volume?: undefined;
            battpercentage: any;
        } | {
            alarm?: undefined;
            duration?: undefined;
            volume?: undefined;
            battpercentage?: undefined;
            melody: any;
        } | {
            alarm?: undefined;
            duration?: undefined;
            melody?: undefined;
            battpercentage?: undefined;
            volume: any;
        };
    };
    ZB006X_settings: {
        cluster: "manuSpecificTuya";
        type: ["commandActiveStatusReport", "commandActiveStatusReportAlt"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandActiveStatusReport", "commandActiveStatusReportAlt"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            power_supply_mode: any;
            switch_type?: undefined;
            load_detection_mode?: undefined;
            switch_status?: undefined;
            control_mode?: undefined;
            load_type?: undefined;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type: any;
            load_detection_mode?: undefined;
            switch_status?: undefined;
            control_mode?: undefined;
            load_type?: undefined;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type?: undefined;
            load_detection_mode: any;
            switch_status?: undefined;
            control_mode?: undefined;
            load_type?: undefined;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type?: undefined;
            load_detection_mode?: undefined;
            switch_status: any;
            control_mode?: undefined;
            load_type?: undefined;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type?: undefined;
            load_detection_mode?: undefined;
            switch_status?: undefined;
            control_mode: any;
            load_type?: undefined;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type?: undefined;
            load_detection_mode?: undefined;
            switch_status?: undefined;
            control_mode?: undefined;
            load_type: any;
            load_dimmable?: undefined;
        } | {
            power_supply_mode?: undefined;
            switch_type?: undefined;
            load_detection_mode?: undefined;
            switch_status?: undefined;
            control_mode?: undefined;
            load_type?: undefined;
            load_dimmable: any;
        };
    };
    tuya_cover: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        options: exposes.Binary[];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    moes_switch: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            power_on_behavior: any;
            indicate_light?: undefined;
        } | {
            power_on_behavior?: undefined;
            indicate_light: any;
        };
    };
    tuya_water_leak: {
        cluster: "manuSpecificTuya";
        type: "commandDataReport";
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, "commandDataReport">, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            water_leak: any;
        };
    };
    wls100z_water_leak: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    silvercrest_smart_led_string: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    frankever_valve: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport", "commandActiveStatusReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport", "commandActiveStatusReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            state: string;
            threshold?: undefined;
            timer?: undefined;
        } | {
            state?: undefined;
            threshold: any;
            timer?: undefined;
        } | {
            state?: undefined;
            threshold?: undefined;
            timer: number;
        };
    };
    tuya_woox_smoke: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery_low: boolean;
            smoke?: undefined;
        } | {
            battery_low?: undefined;
            smoke: any;
        };
    };
    tuya_switch: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse", "commandActiveStatusReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse", "commandActiveStatusReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            [x: string]: string;
            state?: undefined;
        } | {
            state: string;
        };
    };
    tuya_dinrail_switch: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse", "commandActiveStatusReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse", "commandActiveStatusReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            state: string;
            energy?: undefined;
            current?: undefined;
            power?: undefined;
            voltage?: undefined;
        } | {
            state?: undefined;
            energy: number;
            current?: undefined;
            power?: undefined;
            voltage?: undefined;
        } | {
            state?: undefined;
            energy?: undefined;
            current: number;
            power?: undefined;
            voltage?: undefined;
        } | {
            state?: undefined;
            energy?: undefined;
            current?: undefined;
            power: number;
            voltage?: undefined;
        } | {
            state?: undefined;
            energy?: undefined;
            current?: undefined;
            power?: undefined;
            voltage: number;
        };
    };
    ZVG1: {
        cluster: "manuSpecificTuya";
        type: "commandDataResponse";
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, "commandDataResponse">, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => KeyValueAny;
    };
    ZB003X: {
        cluster: "manuSpecificTuya";
        type: ["commandActiveStatusReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandActiveStatusReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            humidity?: undefined;
            temperature: number;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity: any;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2: any;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time: any;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration: string;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration: any;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration: any;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable: any;
            led_enable?: undefined;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable: boolean;
            reporting_enable?: undefined;
        } | {
            temperature?: undefined;
            humidity?: undefined;
            battery2?: undefined;
            reporting_time?: undefined;
            temperature_calibration?: undefined;
            humidity_calibration?: undefined;
            illuminance_calibration?: undefined;
            pir_enable?: undefined;
            led_enable?: undefined;
            reporting_enable: any;
        };
    };
    ZB003X_attr: {
        cluster: "ssIasZone";
        type: ["attributeReport", "readResponse"];
        convert: (model: Definition, msg: Fz.Message<"ssIasZone", undefined, ["attributeReport", "readResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            sensitivity: string;
            keep_time?: undefined;
        } | {
            sensitivity?: undefined;
            keep_time: number;
        };
    };
    ZB003X_occupancy: {
        cluster: "ssIasZone";
        type: "commandStatusChangeNotification";
        convert: (model: Definition, msg: Fz.Message<"ssIasZone", undefined, "commandStatusChangeNotification">, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            occupancy: boolean;
            tamper: boolean;
        };
    };
    tuya_thermostat_weekly_schedule_2: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            weekly_schedule: {
                days: ("away_or_vacation" | "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday")[];
                transitions: {
                    time: any;
                    heating_setpoint: string;
                }[];
            };
        };
    };
    tuya_data_point_dump: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport", "commandActiveStatusReport", "commandActiveStatusReportAlt"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport", "commandActiveStatusReport", "commandActiveStatusReportAlt"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => void;
    };
    javis_microwave_sensor: {
        cluster: "manuSpecificTuya";
        type: ["commandDataReport", "commandDataResponse"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataReport", "commandDataResponse"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            illuminance?: undefined;
            illuminance_calibration?: undefined;
            led_enable?: undefined;
            sensitivity?: undefined;
            keep_time?: undefined;
            states: any;
            occupancy: boolean;
        } | {
            occupancy?: undefined;
            illuminance?: undefined;
            illuminance_calibration?: undefined;
            led_enable?: undefined;
            keep_time?: undefined;
            states?: undefined;
            sensitivity: any;
        } | {
            occupancy?: undefined;
            illuminance_calibration?: undefined;
            led_enable?: undefined;
            sensitivity?: undefined;
            keep_time?: undefined;
            states?: undefined;
            illuminance: any;
        } | {
            occupancy?: undefined;
            illuminance?: undefined;
            led_enable?: undefined;
            sensitivity?: undefined;
            keep_time?: undefined;
            states?: undefined;
            illuminance_calibration: any;
        } | {
            occupancy?: undefined;
            illuminance?: undefined;
            illuminance_calibration?: undefined;
            led_enable?: undefined;
            sensitivity?: undefined;
            states?: undefined;
            keep_time: any;
        } | {
            occupancy?: undefined;
            illuminance?: undefined;
            illuminance_calibration?: undefined;
            sensitivity?: undefined;
            keep_time?: undefined;
            states?: undefined;
            led_enable: boolean;
        };
    };
    SLUXZB: {
        cluster: "manuSpecificTuya";
        type: ["commandDataResponse", "commandDataReport"];
        convert: (model: Definition, msg: Fz.Message<"manuSpecificTuya", undefined, ["commandDataResponse", "commandDataReport"]>, publish: Publish, options: import("./types").KeyValue, meta: Fz.Meta) => {
            battery?: undefined;
            illuminance: any;
            brightness_level?: undefined;
        } | {
            illuminance?: undefined;
            battery: any;
            brightness_level?: undefined;
        } | {
            battery?: undefined;
            illuminance?: undefined;
            brightness_level: any;
        };
    };
};
declare const thermostatSystemModes: {
    [s: number]: string;
};
declare const toZigbee: {
    SA12IZL_silence_siren: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    SA12IZL_alarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    R7049_silenceSiren: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    R7049_testAlarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    R7049_alarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    valve_state: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    shutdown_timer: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    valve_state_auto_shutdown: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    hpsz: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_cover_control: {
        key: string[];
        options: exposes.Binary[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    zb_sm_cover: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    x5h_thermostat: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_binary_one: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_binary_two: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_current_heating_setpoint_auto: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_comfort_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_openwindow_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_openwindow_time: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_eco_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_preset_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_local_temperature_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_away_setting: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: KeyValueAny, meta: Tz.Meta) => Promise<void>;
    };
    zs_thermostat_local_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    giexWaterValve: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                [giexWaterValve.irrigationTarget]: any;
            };
        }>;
    };
    tuya_alecto_smoke: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    matsee_garage_door_opener: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                trigger: unknown;
            };
        }>;
    };
    connecte_thermostat: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_deadzone_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_min_temperature_limit: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_max_temperature_limit: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_mode2: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_standby: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_program_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => {
            state: {
                system_mode: string;
            };
        };
    };
    moesS_thermostat_preset: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_boost_heating: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_window_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_boostHeatingCountdownTimeSet: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_temperature_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_moesSecoMode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_eco_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_max_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_min_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    moesS_thermostat_schedule_programming: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    hgkg_thermostat_standby: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_switch: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_sensor: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_dimmer_state: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_dimmer_level: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_switch_state: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<{
            state: {
                state: any;
            };
        }>;
    };
    frankever_threshold: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                threshold: number;
            };
        }>;
    };
    frankever_timer: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                timer: number;
            };
        }>;
    };
    ZVG1_timer: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                timer: number;
            };
        }>;
    };
    ZVG1_weather_delay: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    ZVG1_cycle_timer: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<KeyValueAny>;
    };
    ZVG1_normal_schedule_timer: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<KeyValueAny>;
    };
    etop_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    etop_thermostat_away_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_weekly_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_window_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    siterwell_thermostat_window_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_valve_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_preset: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_away_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_fan_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_bac_fan_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_auto_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_min_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_max_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_boost_time: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_comfort_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_eco_temp: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_force: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_force_to_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_away_preset: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_window_detect: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: KeyValueAny, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_schedule_programming_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_thermostat_week: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<{
            state: {
                week: any;
            };
        }>;
    };
    tuya_cover_options: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    neo_nas_pd07: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    neo_t_h_alarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    neo_alarm: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    nous_lcd_temperature_humidity_sensor: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_away: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_window_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_frost_detection: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_anti_scaling: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    saswell_thermostat_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    evanell_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    evanell_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    evanell_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    silvercrest_smart_led_string: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_data_point_test: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    hy_thermostat: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    ZB003X: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    ZB006X_settings: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_motion_sensor: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    javis_microwave_sensor: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    moes_thermostat_tv: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_light_wz5: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<{
            state: KeyValueAny;
        }>;
    };
    ZMAM02_cover: {
        key: string[];
        options: exposes.Binary[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    tuya_smart_human_presense_sensor: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    ZG204ZL_lms: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
        convertGet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, meta: Tz.Meta) => Promise<void>;
    };
    moes_cover: {
        key: string[];
        options: exposes.Binary[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<{
            state: {
                backlight?: undefined;
                motor_reversal?: undefined;
                position: any;
            };
        } | {
            state: {
                position?: undefined;
                motor_reversal?: undefined;
                backlight: any;
            };
        } | {
            state: {
                position?: undefined;
                backlight?: undefined;
                motor_reversal: any;
            };
        }>;
    };
    hoch_din: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<{
            state: {
                child_lock?: undefined;
                power_on_behavior?: undefined;
                state: any;
                countdown_timer?: undefined;
                trip?: undefined;
            };
        } | {
            state: {
                state?: undefined;
                power_on_behavior?: undefined;
                child_lock: any;
                countdown_timer?: undefined;
                trip?: undefined;
            };
        } | {
            state: {
                state?: undefined;
                child_lock?: undefined;
                power_on_behavior?: undefined;
                countdown_timer: any;
                trip?: undefined;
            };
        } | {
            state: {
                state?: undefined;
                child_lock?: undefined;
                countdown_timer?: undefined;
                power_on_behavior: any;
                trip?: undefined;
            };
        } | {
            state: {
                state?: undefined;
                child_lock?: undefined;
                power_on_behavior?: undefined;
                countdown_timer?: undefined;
                trip: string;
            };
        }>;
    };
    woox_thermostat_child_lock: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_thermostat_current_heating_setpoint: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    woox_thermostat_system_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                current_heating_setpoint: number;
            };
        }>;
    };
    woox_away_mode: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<{
            state: {
                current_heating_setpoint: number;
            };
        }>;
    };
    woox_comfort_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    woox_eco_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    woox_local_temperature_calibration: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    woox_window_detection_temperature: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: any, meta: Tz.Meta) => Promise<void>;
    };
    woox_window_detection_time: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_boost_heating: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_holidays_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_monday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_tuesday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_wednesday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_thursday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_friday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_saturday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
    woox_sunday_schedule: {
        key: string[];
        convertSet: (entity: import("zigbee-herdsman/dist/controller/model").Endpoint | import("zigbee-herdsman/dist/controller/model").Group, key: string, value: unknown, meta: Tz.Meta) => Promise<void>;
    };
};
export { dataPoints, fromZigbee as fz, fromZigbee, giexWaterValve, moesSwitch, msLookups, thermostatPresets, thermostatSystemModes, thermostatSystemModes2, thermostatSystemModes3, thermostatSystemModes4, toZigbee as tz, toZigbee, tuyaHPSCheckingResult, ZMLookups, };
//# sourceMappingURL=legacy.d.ts.map