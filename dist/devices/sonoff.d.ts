import type { DefinitionWithExtend } from "../lib/types";
export interface SonoffEwelink {
    attributes: {
        networkLed: number;
        backLight: number;
        faultCode: number;
        radioPower: number;
        radioPowerWithManuCode: number;
        delayedPowerOnState: number;
        delayedPowerOnTime: number;
        externalTriggerMode: number;
        detachRelayMode: number;
        deviceWorkMode: number;
        detachRelayMode2: number;
        detachRelayActionEvent: number;
        motorTravelCalibrationAction: number;
        lackWaterCloseValveTimeout: number;
        motorTravelCalibrationStatus: number;
        motorRunStatus: number;
        acCurrentCurrentValue: number;
        acCurrentVoltageValue: number;
        acCurrentPowerValue: number;
        outlet_control_protect: number;
        energyToday: number;
        energyMonth: number;
        energyYesterday: number;
        setCalibrationAction: number[];
        calibrationStatus: number;
        calibrationProgress: number;
        minBrightnessThreshold: number;
        maxBrightnessThreshold: number;
        transitionTime: number;
        levelForCalibration: number;
        dimmingLightRate: number;
        programmableStepperSequence: number[];
        acCurrentMaxOverloadEnable: number;
        acCurrentMaxOverload: number;
        acVoltageMaxOverloadEnable: number;
        acVoltageMaxOverload: number;
        acPowerMaxOverloadEnable: number;
        acPowerMaxOverload: number;
        scenePowerReportValue: number;
        localFastSceneConfiguration: number[];
        acCurrentOutputPowerValue: number;
        outputEnergyToday: number;
        outputEnergyMonth: number;
        dailyElectricityCost: number;
        monthlyElectricityCost: number;
        dailyRunTime: number;
        totalRunTime: number;
        totalEnergyConsumption: number;
        totalOutputEnergyConsumption: number;
        currentElectricalPriceList: number[];
        nextElectricalPriceList: number[];
        sceneValueReport: number[];
        electricalMessageNotification: number[];
        energyRecordStatus: number[];
        outputEnergyConsumptionOfDay: number;
        outputEnergyConsumptionOfMonth: number;
    };
    commands: {
        protocolData: {
            data: number[];
        };
        sceneReportListSet: {
            data: number[];
        };
        wakeupDevice: {
            data: number[];
        };
        readElectricityRecords: {
            data: number[];
        };
        buttonTypeEvent: {
            data: number[];
        };
    };
    commandResponses: {
        readRecordResp: {
            data: number[];
        };
    };
}
export declare const definitions: DefinitionWithExtend[];
//# sourceMappingURL=sonoff.d.ts.map